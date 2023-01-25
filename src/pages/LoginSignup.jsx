import { Box, Image, Heading, Text, Input, Button } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
// import { login } from '../Components/Navbar'
import {
  postNewUserLoginDetails,
  getUserLoginDetails,
  updateUserAuthStatus,
} from '../Redux/authentication/action'
// import { userExist } from '../Redux/authentication/reducer'
import styles from '../styles/Login.module.css'

export const initialState = {
  firstName: '',
  lastName: '',
  mobile: '',
  email: '',
  password: '',
  confirmPassword: '',
  otp: '',
  isLoading: false,
  isError: false,
  isAuth: false,
  // users:[]
}
const existingUser = {
  existingEmail: '',
  existingPassword: '',
}
let userExist
export function LoginSignup() {
  //-------------------------------HOOKS-------------------------------------------------------------
  const [userData, setUserData] = useState(initialState)
  const [existingUserData, setExistingUserData] = useState(existingUser)
  const [checkMsg, setCheckMsg] = useState('Incorrect OTP')
  const [color, setColor] = useState('red')
  const [otp] = useState('1234')
  const [visible, setVisible] = useState(false)
  const btnRef = useRef()
  const loginBtnRef = useRef()
  const otpRef = useRef()
  const navigate = useNavigate()
  const [showMatchStatus, setShowMatchStatus] = useState(false)
  const [matchStatus, setMatchStatus] = useState('passwords dont match')
  // const location = useLocation();

  // console.log(location)

  const dispatch = useDispatch()
  const reduxStore = useSelector((store) => store.users)

  const [showForm1, setShowForm1] = useState(true)
  const [showForm2, setShowForm2] = useState(false)
  const [showForm3, setShowForm3] = useState(false)

  //------------------------FUNCTIONS----------------------------------------------------------
  const getInput = (e) => {
    let name = e.target.name
    // console.log(e.target.name)

    if (name === 'existingEmail' || name === 'existingPassword') {
      setExistingUserData(
        (prev) => (prev = { ...prev, [name]: e.target.value }),
      )
      console.log(name)
    } else {
      setUserData((prev) => (prev = { ...prev, [name]: e.target.value }))
      if (e.target.name === 'mobile') {
        btnRef.current.disabled = false
      }
      if (e.target.name === 'confirmPassword') {
        setShowMatchStatus(true)
        if (e.target.value === userData.password) {
          otpRef.current.disabled = false
          setMatchStatus('passwords match')
          setColor('green')
        } else {
          otpRef.current.disabled = true
          setMatchStatus('passwords dont match')
          setColor('red')
        }
        // console.log(userData,"outside")
      }
      if (e.target.name === 'otp') {
        setShowMatchStatus(false)
        setVisible(true)
        if (e.target.value === otp) {
          setCheckMsg('OTP Matched')
          setColor('green')
          setUserData((prev) => (prev = { ...prev, isAuth: true }))
        } else {
          setCheckMsg('Incorrect OTP')
          setColor('red')
        }
        if (e.target.value.length === 0) {
          // console.log("len is 0", e.target.value)
          setVisible(false)
        }
      }
    }
  }

  // console.log(showForm1,"1",showForm2,"2",showForm3,"3");
  // console.log(existingUserData)
  // console.log(userData,"user data object")
  // console.log(reduxStore,"from redux store")
  // console.log(userData.mobile, "mobile number")

  const toggleForms = async (e) => {
    // console.log(e.target.innerText)
    // console.log("clicking of proceed button");
    if (e.target.innerText === 'Proceed') {
      await dispatch(getUserLoginDetails(userData.mobile))
      userExist = JSON.parse(localStorage.getItem('currentUser'))

      console.log(userExist, 'current which tried to login')
      if (userExist) {
        updateUserAuthStatus(userExist.id, { isAuth: true })
        userExist.isAuth = true
        localStorage.setItem('currentUser', JSON.stringify(userExist))
        setShowForm3(true)
        // setShowForm1(prev => !prev);
        setShowForm1(false)
        setShowForm2(false)
        console.log('yo')
      } else {
        alert('Default OTP: 1234')

        setShowForm3(false)
        setVisible(false)
        setShowForm1((prev) => !prev)
        setShowForm2((prev) => !prev)
      }
    } else if (e.target.innerText === 'Cancel') {
      setUserData(initialState)
    }
    // else{

    //   setVisible(false)
    //   setShowForm1((prev) => !prev)
    //   setShowForm2((prev) => !prev)
    //   setShowForm3(false)
    // }
  }
  // console.log(showForm3)
  const addUser = async () => {
    console.log(userData, 'from addUser function in login signup')
    let res = await dispatch(postNewUserLoginDetails(userData))
    // login();
    // currentUser = JSON.parse(localStorage.getItem("currentUser"))
    //  let res = await dispatch(getUserLoginDetails(userData.mobile));
    //  localStorage.setItem('currentUser', JSON.stringify(res.))
    console.log(res, 'response from login signup')

    navigate('/')
  }
  const checkCredentials = () => {
    // console.log(userExist,"userExit from localt storage");
    // console.log(existingUserData,"existing user data");
    userExist = JSON.parse(localStorage.getItem('currentUser'))
    if (
      existingUserData.existingEmail === userExist.email &&
      existingUserData.existingPassword === userExist.password
    ) {
      navigate('/')
    } else {
      alert('email or password is wrong')
    }
  }
  //------------------------------------RETURN---------------------------------------------------------
  return (
    <Box
      id={styles.mainContainer}
      display="flex"
      borderRadius="10px"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      width="80%"
      height="auto"
      margin="auto"
      marginTop="70px"
      //   bg="pink.100"
    >
      <Box w="40%" id={styles.subContainer}>
        <Image
          w="100%"
          id={styles.img}
          src="https://www.jiomart.com/msassets/images/login-banner.jpg"
          alt="loginImage"
          borderRadius="10px 0px 0px 10px"
        />
      </Box>

      <Box id={styles.subContainer2} w="60%">
        {/* ---------------------------------------------1st form conditional rendering-------------------------------------------------------------- */}
        {showForm1 && (
          <>
            <Box
              align="left"
              // border="1px solid blue"
              margin="auto"
              w="50%"
              mt="20px"
            >
              <Heading id={styles.heading}>Sign In</Heading>
              <Text id={styles.subHeading}>
                Sign in to access your Orders, Offers and Wishlist.
              </Text>
            </Box>
            <FormControl width="50%" margin="auto">
              <FormLabel id={styles.form1} mt="100px">
                Mobile Number
              </FormLabel>
              <Input
                border="2px solid gray"
                type="number"
                name="mobile"
                value={userData.mobile}
                onChange={getInput}
                // maxLength={}
              />
              {userData.mobile.length > 0 && userData.mobile.length <= 9 && (
                <Text color="red">10 digits required</Text>
              )}
              {userData.mobile.length > 10 && (
                <Text color="red">10 digits required</Text>
              )}
              {userData.mobile.length === 10 && (
                <Text color="green">Great, now you can proceed</Text>
              )}
              <Button
                mt="20px"
                isDisabled={
                  userData.mobile.length < 10 || userData.mobile.length > 10
                }
                // ref={btnRef}
                onClick={toggleForms}
                bg="orange"
              >
                Proceed
              </Button>
            </FormControl>
          </>
        )}
        {/*-----------------------------------2nd form conditional rendering------------------------------------------------------  */}
        {showForm2 && (
          <>
            <Heading>Sign Up</Heading>
            <FormControl
              id={styles.form2Input}
              width="50%"
              margin="auto"
              mt="30px"
            >
              <FormLabel>Start by entering your First Name</FormLabel>
              <Input
                // w="200px"
                // className={styles.form2Input}
                // id="firstName"
                name="firstName"
                placeholder="First Name"
                border="2px solid gray"
                type="text"
                //   value={userData.firstName}
                onChange={getInput}
              />
              <Input
                // w="200px"
                // className={styles.form2Input}
                // id="lastName"
                name="lastName"
                placeholder="Last Name"
                border="2px solid gray"
                type="text"
                value={userData.lastName}
                onChange={getInput}
                //   ref={lastNameRef}
                isDisabled={userData.firstName.length === 0}
              />
              <Input
                // w="200px"
                // className={styles.form2Input}
                // id="email"
                name="email"
                placeholder="Enter Email"
                border="2px solid gray"
                type="text"
                value={userData.email}
                onChange={getInput}
                //   ref={emailRef}
                isDisabled={userData.lastName.length === 0}
              />
              <Input
                // w="200px"
                // className={styles.form2Input}
                name="password"
                placeholder="Password"
                border="2px solid gray"
                type="password"
                value={userData.password}
                onChange={getInput}
                //   ref={passwordRef}
                isDisabled={userData.email.length === 0}
              />
              <Input
                // w="200px"
                // className={styles.form2Input}
                // id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                border="2px solid gray"
                type="password"
                value={userData.confirmPassword}
                onChange={getInput}
                // ref={confirmPasswordRef}
                isDisabled={userData.password.length === 0}
              />
              {showMatchStatus && (
                <Text align="left" fontSize="15px" color={color}>
                  {matchStatus}
                </Text>
              )}
              <FormLabel fontWeight="bold" mt="30px">
                Provide OTP sent on your mobile number +91 {userData.mobile}
              </FormLabel>
              <Input
                // w="200px"
                // className={styles.form2Input}
                name="otp"
                placeholder="Enter 1234 as default OTP"
                border="2px solid gray"
                type="password"
                value={userData.otp}
                onChange={getInput}
                ref={otpRef}
                isDisabled
                // ={userData.confirmPassword.length === 0}
              />
              {visible && (
                <Text fontSize="15px" color={color} align="left">
                  {checkMsg}
                </Text>
              )}
              <Button onClick={(e) => toggleForms(e)} mt="20px" bg="red.500">
                Cancel
              </Button>
              <Button
                mt="20px"
                isDisabled={userData.otp !== otp}
                bg="orange"
                onClick={addUser}
              >
                Verify
              </Button>
            </FormControl>
          </>
        )}
        {/* ---------------------------------------3rd form---------------------------------------------------------------------------- */}
        {showForm3 && (
          <FormControl width="50%" margin="auto">
            <FormLabel id={styles.form3} mt="100px">
              Enter your Details to login
            </FormLabel>
            <Input
              mt="30px"
              border="2px solid gray"
              type="email"
              placeholder="Enter Email"
              name="existingEmail"
              value={existingUserData.existingEmail}
              onChange={getInput}
            />

            <Input
              mt="30px"
              border="2px solid gray"
              type="password"
              placeholder="Enter Password"
              name="existingPassword"
              value={existingUserData.existingPassword}
              onChange={getInput}
            />

            <Button
              mt="30px"
              isDisabled={
                existingUserData.existingPassword.length === 0 ||
                existingUserData.existingEmail.length === 0
              }
              // ref={btnRef2}
              onClick={checkCredentials}
              bg="orange"
            >
              login
            </Button>
          </FormControl>
        )}
      </Box>
    </Box>
  )
}
