import * as types from './actionTypes'
import { initialState } from '../../pages/LoginSignup'

const reduxState = {
  ...initialState,
  users: [],
}

export const reducer = (oldState = reduxState, { type, payload }) => {
  switch (type) {
    //-------------------------------------------POST REQUESTS------------------------------------------------------------------------------------------

    case types.POST_USER_LOGIN_DATA_REQUEST:
      return { ...oldState, isLoading: true }

    case types.POST_USER_LOGIN_DATA_SUCCESS:
      if (payload) {
        localStorage.setItem('currentUser', JSON.stringify(payload))
      
      } 
    //   else {
    //     localStorage.removeItem('currentUser')
    //     // userExist = JSON.parse(localStorage.getItem("currentUser"))
    //   }
      return {
        ...oldState,
        isLoading: false,
        firstName: payload.firstName,
        lastName: payload.lastName,
        mobile: payload.mobile,
        email: payload.email,
        password: payload.password,
        confirmPassword: payload.confirmPassword,
        otp: payload.otp,
        isError: false,
        users: [...oldState.users, payload],
      }

    // case types.POST_USER_LOGIN_DATA_SUCCESS: return {...oldState, users: [...users,payload], isAuth: true, isLoading: false}

    case types.POST_USER_LOGIN_DATA_FAILURE:
      return { ...oldState, isLoading: false, isError: true }

    //-------------------------------------------GET REQUESTS------------------------------------------------------------------------------------------

    case types.GET_USER_LOGIN_DATA_REQUEST:
      return { ...oldState, isLoading: true }

    case types.GET_USER_LOGIN_DATA_SUCCESS:
      if (payload.length !== 0) {
        localStorage.setItem('currentUser', JSON.stringify(payload[0]))
        // userExist = JSON.parse(localStorage.getItem("currentUser"))
      } else {
        localStorage.removeItem('currentUser')
        // userExist = JSON.parse(localStorage.getItem("currentUser"))
      }
      return {
        ...oldState,
        isLoading: false,
        firstName: payload.firstName,
        lastName: payload.lastName,
        mobile: payload.mobile,
        email: payload.email,
        password: payload.password,
        confirmPassword: payload.confirmPassword,
        otp: payload.otp,
        isError: false,
      }

    case types.GET_USER_LOGIN_DATA_FAILURE:
      return { ...oldState, isLoading: false, isError: true }

    default:
      return { ...oldState }
  }
}
