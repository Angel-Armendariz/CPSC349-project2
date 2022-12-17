const USERNAME = 'admin@pocketbase.admin.com'
const PASSWORD = 'pocketbaseadmin'

const pb = new PocketBase('http://127.0.0.1:8090')


const root = ReactDOM.createRoot(document.getElementById('navBar'))
const footer = ReactDOM.createRoot(document.getElementById('footerNavBar'))
var loginForm = ""
var resultMessage = ""



if (pb.authStore.isValid){
  root.render(
    <React.StrictMode>
      <LogoutNavButton />
    </React.StrictMode>
  )
  footer.render(
    <React.StrictMode>
      <LogoutNavButtonFooter />
    </React.StrictMode>
  )
}
else {
  root.render(
    <React.StrictMode>
      <LoginNavButton />
    </React.StrictMode>
  )
  footer.render(
    <React.StrictMode>
      <LoginNavButtonFooter />
    </React.StrictMode>
  )
}




// async function userLogin() {
//   const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
// }

class LoginForm extends React.Component {
  submitLoginButton = async (event) => {
    event.preventDefault()
    try {
      await pb.collection('users').authWithPassword(event.target.username.value, event.target.password.value)
      login()
    }
    catch (e) {
      resultMessage.render(
        <React.StrictMode>
          <LoginErrorMessage />
        </React.StrictMode>
  
      )
    }
    
    
    
  }
  render() {
    return(
      <form onSubmit={this.submitLoginButton}>

  <div class="flex flex-col items-center space-y-6 border-8">

          <input type="text" name="username" placeholder="Username" required class="border-2 mt-6"/>

          <input type="password" name="password" placeholder="Password" required class="border-2"/>

          <button type="submit"
        class="transition 
              ease-in-out 
              delay-150 
              hover:-translate-y-1 
              hover:scale-110 
              hover:bg-indigo-500 
              duration-300
              text-white
              text-center
              bg-cyan-500 
              shadow-sm 
              shadow-cyan-500
              p-3
              rounded-md m-4">Log In</button>
</div>
</form>
)

  }
  
}

class SignUpForm extends React.Component {
  submitSignUpButton = async (event) => {
    event.preventDefault()
    
    
    try {
      await pb.collection('users').create({
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
        passwordConfirm: event.target.password.value
      })
      resultMessage.render(
        <React.StrictMode>
          <SignUpSuccessMessage />
        </React.StrictMode>
  
      )
    }
    catch (e){
      resultMessage.render(
        <React.StrictMode>
          <SignUpErrorMessage />
        </React.StrictMode>
  
      )
    }
  }
  render() {
    return(
      <form onSubmit={this.submitSignUpButton}>

  <div class="flex flex-col items-center space-y-6 border-8">

  <input type="text" name="username" placeholder="Username" required class="border-2 mt-6"/> 

  <input type="email" name="email" placeholder="Email" required class="border-2"/>

  <input type="password" name="password" placeholder="Password" required class="border-2"/>

  <button type="submit" 
          class="transition 
                 ease-in-out 
                 delay-150 
                 hover:-translate-y-1 
                 hover:scale-110 
                 hover:bg-indigo-500 
                 duration-300
                 text-white
                 text-center
                 bg-cyan-500 
                 shadow-sm 
                 shadow-cyan-500
                 p-3
                 rounded-md m-4">Sign up</button>
</div>
</form>

)

  }
  
}



if (document.getElementById('loginForm') != null ) {
  loginForm = ReactDOM.createRoot(document.getElementById('loginForm'))
  loginForm.render(
    <React.StrictMode>
      <LoginForm />
    </React.StrictMode>
  )
}

if (document.getElementById('SignUpForm') != null ) {
  loginForm = ReactDOM.createRoot(document.getElementById('SignUpForm'))
  loginForm.render(
    <React.StrictMode>
      <SignUpForm />
    </React.StrictMode>
  )
}

if (document.getElementById('resultMessage') != null ){
  resultMessage = ReactDOM.createRoot(document.getElementById('resultMessage'))
  
}

async function logout () {
  pb.authStore.clear()
  root.render(
    <React.StrictMode>
      <LoginNavButton />
    </React.StrictMode>
  )
  footer.render(
    <React.StrictMode>
      <LoginNavButtonFooter />
    </React.StrictMode>
  )
}

async function login () {
  if (pb.authStore.isValid){
    root.render(
      <React.StrictMode>
        <LogoutNavButton />
      </React.StrictMode>
    )
    resultMessage.render(
      <React.StrictMode>
        <LoginSuccessMessage />
      </React.StrictMode>

    )
    footer.render(
      <React.StrictMode>
        <LogoutNavButtonFooter />
      </React.StrictMode>
    )
  }
  else {
    resultMessage.render(
      <React.StrictMode>
        <LoginErrorMessage />
      </React.StrictMode>

    )
  }

}

function LoginErrorMessage() {
  return(
    <div className='loginErrorMessage'>
      <h2 class="text-center">Error! Incorrect username and/or password</h2>
      </div>
  )
}

function LoginSuccessMessage() {
  return(
    <div className='loginSuccessMessage'>
      <h2 class="text-center">Success! Click Calendar to head over to the dashboard</h2>
      </div>
  )
}

function SignUpErrorMessage() {
  return(
    <div className='loginSuccessMessage'>
      <h2 class="text-center">Error! Username and/or email is taken</h2>
      </div>
  )
}

function SignUpSuccessMessage() {
  return(
    <div className='loginSuccessMessage'>
      <h2 class="text-center">Success! You may now login</h2>
      </div>
  )
}

function LogoutNavButton () {
  return (


<div className='LogoutNavButton' class="flex flex-wrap justify-around sticky top-0 pt-1">

<a class="transition 
          ease-in-out 
          delay-150 
          hover:-translate-y-1 
          hover:scale-110 
          hover:bg-indigo-500 
          duration-300 
          text-white
          bg-cyan-500 
          shadow-lg 
          shadow-cyan-500/50 
          p-3
          rounded-md nav__button" href="./index.html">Home</a>

          <a class="transition 
          ease-in-out 
          delay-150 
          hover:-translate-y-1 
          hover:scale-110 
          hover:bg-indigo-500 
          duration-300 
          text-white 
          bg-cyan-500 
          shadow-lg 
          shadow-cyan-500/50 
          p-3
          rounded-md nav__button" href="./app-index.html">Calendar</a>  

  <a class="transition 
            ease-in-out 
            delay-150 
            hover:-translate-y-1
            hover:scale-110 
            hover:bg-indigo-500 
            duration-300 
            text-white 
            bg-cyan-500 
            shadow-lg 
            shadow-cyan-500/50 
            p-3
            rounded-md" href="./aboutUs.html">About Us</a>

  <a class="transition 
            ease-in-out 
            delay-150 
            hover:-translate-y-1 
            hover:scale-110 
            hover:bg-indigo-500 
            duration-300 
            text-white 
            bg-cyan-500 
            shadow-lg 
            shadow-cyan-500/50 
            rounded-md 
            p-3
            nav__button" href="./index.html" onClick={logout}>Logout</a>

</div>
    
  )
}

function LoginNavButton () {
  return (


<div className='LoginNavButton' class="flex flex-wrap justify-around sticky top-0 pt-1">

<a class="transition 
          ease-in-out 
          delay-150 
          hover:-translate-y-1 
          hover:scale-110 
          hover:bg-indigo-500 
          duration-300 
          text-white
          bg-cyan-500 
          shadow-lg 
          shadow-cyan-500/50 
          p-3
          rounded-md nav__button" href="./index.html">Home</a>

  <a class="transition 
            ease-in-out 
            delay-150 
            hover:-translate-y-1
            hover:scale-110 
            hover:bg-indigo-500 
            duration-300 
            text-white 
            bg-cyan-500 
            shadow-lg 
            shadow-cyan-500/50 
            p-3
            rounded-md" href="./aboutUs.html">About Us</a>

  <a class="transition 
            ease-in-out 
            delay-150 
            hover:-translate-y-1 
            hover:scale-110 
            hover:bg-indigo-500 
            duration-300 
            text-white 
            bg-cyan-500 
            shadow-lg 
            shadow-cyan-500/50 
            p-3
            rounded-md nav__button" href="./signUp.html">Sign Up</a>

  <a class="transition 
            ease-in-out 
            delay-150 
            hover:-translate-y-1 
            hover:scale-110 
            hover:bg-indigo-500 
            duration-300 
            text-white 
            bg-cyan-500 
            shadow-lg 
            shadow-cyan-500/50 
            rounded-md 
            p-3
            nav__button" href="./login.html">Log In</a>

</div>
  )
}


function LoginNavButtonFooter () {
  return (
    <div className="LoginNavButtonFooter">
    
    |&nbsp;  <a class="hover:text-blue-300 nav__button" href="./index.html">Home</a>  	&nbsp;|	 	&nbsp;
    
           
    
            <a class="hover:text-blue-300" href="./aboutUs.html">About Us</a> 	&nbsp;| 	&nbsp;
    
            <a class="hover:text-blue-300" href="./signUp.html">Sign Up</a> 	&nbsp;| 	&nbsp;
    
            <a class="hover:text-blue-300 nav__button" href="./login.html">Log In</a> 	&nbsp;|
    </div>
  )
}

function LogoutNavButtonFooter() {
  return (
    <div className="LogoutNavButtonFooter">
    
    |&nbsp;  <a class="hover:text-blue-300 nav__button" href="./index.html">Home</a>  	&nbsp;|	 	&nbsp;
    
            <a class="hover:text-blue-300" href="./app-index.html">Calendar</a> 	&nbsp;| 	&nbsp;
    
            <a class="hover:text-blue-300" href="./aboutUs.html">About Us</a> 	&nbsp;| 	&nbsp;
    
            
    
            <a class="hover:text-blue-300 nav__button" href="./index.html" onClick={logout}>Logout</a> 	&nbsp;|
    </div>
  )
}