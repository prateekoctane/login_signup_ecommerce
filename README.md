<h1>Login-Signup for an E-commerce Website</h1>

<h3>In this mini-project, I have tried to make the Login & Signup functionality for a website, using react-redux and browser's local storage.</h3>

<h3>Tech Stacks Used</h3>
1. React <br />
2. Chakra-UI <br />
3. React-Redux <br />
4. Redux <br />
5. React-router-dom <br />
6. Browser LocalStorage <br />
7. Axios

<h3>If you want to run this project on your browser to see how it executes, then follow these steps:</h3>

1. open/install VS Code.
2. clone this repository.
3. now install node_modules by typing this command ----> "npm install"
4. now run server by typing this command ----> "npm start".
5. the application will run on your browser.

<h3>Glimpse of Project</h3>

<h4>UI is kept to minimal....</h4>

<b>1. Home page with navbar</b>
<img src="https://github.com/prateekoctane/login_signup_ecommerce/blob/main/home%20navbar.PNG" alt="home" />

<b>2. Login-Signup Page </b>
<img src="https://github.com/prateekoctane/login_signup_ecommerce/blob/main/login-signup%20page.PNG" alt="home" />

<b>3. User Signup Form </b>
<img src="https://github.com/prateekoctane/login_signup_ecommerce/blob/main/signup%20form.PNG" alt="home" />

<b>4. Login Form </b>
<img src="https://github.com/prateekoctane/login_signup_ecommerce/blob/main/login%20form.PNG" alt="home" />

<b>4. User Name on Navbar after Login </b>
<img src="https://github.com/prateekoctane/login_signup_ecommerce/blob/main/navbar%20after%20user%20log%20in.PNG" alt="home" />





<h3>Flow of the Project</h3>

1. On load opens up Home page with navbar.
2. Clicking on the Login/Signup will re-direct you to the "/login" route, which is the login page.
3. Enter your mobile number and click "Proceed" Button.
4. If you are a new user, then "Fill Details" form will be displayed.
   - fill all the details
   - 'password' & 'Confirm password' should match. It will show a prompt beneath the input box telling whether it matched or not.
   - Enter OTP, which i have hard-coded as "1234".
   - Once OTP matches only then the "Verify" button will be Enabled.
5. Else if, you are an existing user, then it will show you the email & password form
   - when both the email and password is correct as per the database, only then you will be logged in and redirected to home page.
   - In home page User's name will be displayed on the navbar. It is in the form of dropdown menu.
   - Click on this dropdown menu and click on "Logout" option to logout.

<h3>Interesting Highlights of this project</h3>

1. "Proceed" button in login page will only be enabled when the mobile number is exactly of length 10( 10 digits ). This is done to prevent unnecessary api requests by the users, if they click without filling their mobile number or less than or more than 10 digits of mobile number.
2.  The form in which you fill your details as a new user also implements this technique. Only the First Name field is enabled. When the user types his/her first name,       only then the Next field will be enabled. Meaning every next field will be enable on typing input in the current field. This ensures that the user does not miss any     input field before clicking on the submit/verify button. 
3.  Lastly the sumbit/Verify button will only be enabled when the OTP will match. This prevents unnecessary api calls with missing or wrong input from users end. Stops users from playing with the website.
