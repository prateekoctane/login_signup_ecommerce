<h1>Login-Signup for an E-commerce Website</h1>

<h3>In this mini-project, I have tried to make the Login & Signup functionality for a website, using react-redux and browser's local storage.</h3>

<h3>Tech Stacks Used</h3>
1. React <br />
2. Chakra-UI <br />
3. React-Redux <br />
4. Redux <br />
5. React-router-dom <br />
6. Browser LocalStorage </>

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

<b>1. Login-Signup Page </b>
<img src="https://github.com/prateekoctane/login_signup_ecommerce/blob/main/login-signup%20page.PNG" alt="home" />


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
