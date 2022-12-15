const USERNAME = "admin@pocketbase.admin.com";
const PASSWORD = "pocketbaseadmin";
const pb = new PocketBase("http://127.0.0.1:8090");
const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD);
console.log(authData);
//const root = ReactDOM.createRoot(document.getElementById("root"));
const user = document.getElementById("user");
const title = document.getElementById("title");
const TodoSunday = document.getElementById("TodoSunday");
const NewTodoSunday = document.getElementById("NewTodoSunday");
//root.render(
//  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App, null))
//);
function App() {
  return /* @__PURE__ */ React.createElement("div", { className: "App" }, /* @__PURE__ */ React.createElement("h1", null, "Hello, ", authData.admin.email));
const root = ReactDOM.createRoot(document.getElementById("navBar"));
const footer = ReactDOM.createRoot(document.getElementById("footerNavBar"));
var loginForm = "";
var resultMessage = "";
if (pb.authStore.isValid) {
  root.render(
    /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(LogoutNavButton, null))
  );
  footer.render(
    /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(LogoutNavButtonFooter, null))
  );
} else {
  root.render(
    /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(LoginNavButton, null))
  );
  footer.render(
    /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(LoginNavButtonFooter, null))
  );
}
class LoginForm extends React.Component {
  submitLoginButton = async (event) => {
    event.preventDefault();
    try {
      await pb.collection("users").authWithPassword(event.target.username.value, event.target.password.value);
      login();
    } catch (e) {
      resultMessage.render(
        /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(LoginErrorMessage, null))
      );
    }
  };
  render() {
    return /* @__PURE__ */ React.createElement("form", { onSubmit: this.submitLoginButton }, /* @__PURE__ */ React.createElement("div", { class: "flex flex-col items-center space-y-6 border-8" }, /* @__PURE__ */ React.createElement("input", { type: "text", name: "username", placeholder: "Username", required: true, class: "border-2 mt-6" }), /* @__PURE__ */ React.createElement("input", { type: "password", name: "password", placeholder: "Password", required: true, class: "border-2" }), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        class: "transition \n              ease-in-out \n              delay-150 \n              hover:-translate-y-1 \n              hover:scale-110 \n              hover:bg-indigo-500 \n              duration-300\n              text-white\n              text-center\n              bg-cyan-500 \n              shadow-sm \n              shadow-cyan-500\n              p-3\n              rounded-md m-4"
      },
      "Log In"
    )));
  }
}
class SignUpForm extends React.Component {
  submitSignUpButton = async (event) => {
    event.preventDefault();
    try {
      await pb.collection("users").create({
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
        passwordConfirm: event.target.password.value
      });
      resultMessage.render(
        /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(SignUpSuccessMessage, null))
      );
    } catch (e) {
      resultMessage.render(
        /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(SignUpErrorMessage, null))
      );
    }
  };
  render() {
    return /* @__PURE__ */ React.createElement("form", { onSubmit: this.submitSignUpButton }, /* @__PURE__ */ React.createElement("div", { class: "flex flex-col items-center space-y-6 border-8" }, /* @__PURE__ */ React.createElement("input", { type: "text", name: "username", placeholder: "Username", required: true, class: "border-2 mt-6" }), /* @__PURE__ */ React.createElement("input", { type: "email", name: "email", placeholder: "Email", required: true, class: "border-2" }), /* @__PURE__ */ React.createElement("input", { type: "password", name: "password", placeholder: "Password", required: true, class: "border-2" }), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        class: "transition \n                 ease-in-out \n                 delay-150 \n                 hover:-translate-y-1 \n                 hover:scale-110 \n                 hover:bg-indigo-500 \n                 duration-300\n                 text-white\n                 text-center\n                 bg-cyan-500 \n                 shadow-sm \n                 shadow-cyan-500\n                 p-3\n                 rounded-md m-4"
      },
      "Sign up"
    )));
  }
}
if (document.getElementById("loginForm") != null) {
  loginForm = ReactDOM.createRoot(document.getElementById("loginForm"));
  loginForm.render(
    /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(LoginForm, null))
  );
}
if (document.getElementById("SignUpForm") != null) {
  loginForm = ReactDOM.createRoot(document.getElementById("SignUpForm"));
  loginForm.render(
    /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(SignUpForm, null))
  );
}
if (document.getElementById("resultMessage") != null) {
  resultMessage = ReactDOM.createRoot(document.getElementById("resultMessage"));
}
async function logout() {
  pb.authStore.clear();
  root.render(
    /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(LoginNavButton, null))
  );
  footer.render(
    /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(LoginNavButtonFooter, null))
  );
}
async function login() {
  if (pb.authStore.isValid) {
    root.render(
      /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(LogoutNavButton, null))
    );
    resultMessage.render(
      /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(LoginSuccessMessage, null))
    );
    footer.render(
      /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(LogoutNavButtonFooter, null))
    );
  } else {
    resultMessage.render(
      /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(LoginErrorMessage, null))
    );
  }
}
function LoginErrorMessage() {
  return /* @__PURE__ */ React.createElement("div", { className: "loginErrorMessage" }, /* @__PURE__ */ React.createElement("h2", { class: "text-center" }, "Error! Incorrect username and/or password"));
}
function LoginSuccessMessage() {
  return /* @__PURE__ */ React.createElement("div", { className: "loginSuccessMessage" }, /* @__PURE__ */ React.createElement("h2", { class: "text-center" }, "Success! Click Calendar to head over to the dashboard"));
}
function SignUpErrorMessage() {
  return /* @__PURE__ */ React.createElement("div", { className: "loginSuccessMessage" }, /* @__PURE__ */ React.createElement("h2", { class: "text-center" }, "Error! Username and/or email is taken"));
}
function SignUpSuccessMessage() {
  return /* @__PURE__ */ React.createElement("div", { className: "loginSuccessMessage" }, /* @__PURE__ */ React.createElement("h2", { class: "text-center" }, "Success! You may now login"));
}
function LogoutNavButton() {
  return /* @__PURE__ */ React.createElement("div", { className: "LogoutNavButton", class: "flex flex-wrap justify-around sticky top-0 pt-1" }, /* @__PURE__ */ React.createElement("a", { class: "transition \n          ease-in-out \n          delay-150 \n          hover:-translate-y-1 \n          hover:scale-110 \n          hover:bg-indigo-500 \n          duration-300 \n          text-white\n          bg-cyan-500 \n          shadow-lg \n          shadow-cyan-500/50 \n          p-3\n          rounded-md nav__button", href: "./index.html" }, "Home"), /* @__PURE__ */ React.createElement("a", { class: "transition \n          ease-in-out \n          delay-150 \n          hover:-translate-y-1 \n          hover:scale-110 \n          hover:bg-indigo-500 \n          duration-300 \n          text-white \n          bg-cyan-500 \n          shadow-lg \n          shadow-cyan-500/50 \n          p-3\n          rounded-md nav__button", href: "./app-index.html" }, "Calendar"), /* @__PURE__ */ React.createElement("a", { class: "transition \n            ease-in-out \n            delay-150 \n            hover:-translate-y-1\n            hover:scale-110 \n            hover:bg-indigo-500 \n            duration-300 \n            text-white \n            bg-cyan-500 \n            shadow-lg \n            shadow-cyan-500/50 \n            p-3\n            rounded-md", href: "./aboutUs.html" }, "About Us"), /* @__PURE__ */ React.createElement("a", { class: "transition \n            ease-in-out \n            delay-150 \n            hover:-translate-y-1 \n            hover:scale-110 \n            hover:bg-indigo-500 \n            duration-300 \n            text-white \n            bg-cyan-500 \n            shadow-lg \n            shadow-cyan-500/50 \n            rounded-md \n            p-3\n            nav__button", href: "./index.html", onClick: logout }, "Logout"));
}
function LoginNavButton() {
  return /* @__PURE__ */ React.createElement("div", { className: "LoginNavButton", class: "flex flex-wrap justify-around sticky top-0 pt-1" }, /* @__PURE__ */ React.createElement("a", { class: "transition \n          ease-in-out \n          delay-150 \n          hover:-translate-y-1 \n          hover:scale-110 \n          hover:bg-indigo-500 \n          duration-300 \n          text-white\n          bg-cyan-500 \n          shadow-lg \n          shadow-cyan-500/50 \n          p-3\n          rounded-md nav__button", href: "./index.html" }, "Home"), /* @__PURE__ */ React.createElement("a", { class: "transition \n            ease-in-out \n            delay-150 \n            hover:-translate-y-1\n            hover:scale-110 \n            hover:bg-indigo-500 \n            duration-300 \n            text-white \n            bg-cyan-500 \n            shadow-lg \n            shadow-cyan-500/50 \n            p-3\n            rounded-md", href: "./aboutUs.html" }, "About Us"), /* @__PURE__ */ React.createElement("a", { class: "transition \n            ease-in-out \n            delay-150 \n            hover:-translate-y-1 \n            hover:scale-110 \n            hover:bg-indigo-500 \n            duration-300 \n            text-white \n            bg-cyan-500 \n            shadow-lg \n            shadow-cyan-500/50 \n            p-3\n            rounded-md nav__button", href: "./signUp.html" }, "Sign Up"), /* @__PURE__ */ React.createElement("a", { class: "transition \n            ease-in-out \n            delay-150 \n            hover:-translate-y-1 \n            hover:scale-110 \n            hover:bg-indigo-500 \n            duration-300 \n            text-white \n            bg-cyan-500 \n            shadow-lg \n            shadow-cyan-500/50 \n            rounded-md \n            p-3\n            nav__button", href: "./login.html" }, "Log In"));
}
function LoginNavButtonFooter() {
  return /* @__PURE__ */ React.createElement("div", { className: "LoginNavButtonFooter" }, "|\xA0  ", /* @__PURE__ */ React.createElement("a", { class: "hover:text-blue-300 nav__button", href: "./landingPage.html" }, "Home"), "  	\xA0|	 	\xA0", /* @__PURE__ */ React.createElement("a", { class: "hover:text-blue-300", href: "./aboutUs.html" }, "About Us"), " 	\xA0| 	\xA0", /* @__PURE__ */ React.createElement("a", { class: "hover:text-blue-300", href: "./signUp.html" }, "Sign Up"), " 	\xA0| 	\xA0", /* @__PURE__ */ React.createElement("a", { class: "hover:text-blue-300 nav__button", href: "./login.html" }, "Log In"), " 	\xA0|");
}
function LogoutNavButtonFooter() {
  return /* @__PURE__ */ React.createElement("div", { className: "LogoutNavButtonFooter" }, "|\xA0  ", /* @__PURE__ */ React.createElement("a", { class: "hover:text-blue-300 nav__button", href: "./landingPage.html" }, "Home"), "  	\xA0|	 	\xA0", /* @__PURE__ */ React.createElement("a", { class: "hover:text-blue-300", href: "./app-index.html" }, "Calendar"), " 	\xA0| 	\xA0", /* @__PURE__ */ React.createElement("a", { class: "hover:text-blue-300", href: "./aboutUs.html" }, "About Us"), " 	\xA0| 	\xA0", /* @__PURE__ */ React.createElement("a", { class: "hover:text-blue-300 nav__button", href: "./index.html", onClick: logout }, "Logout"), " 	\xA0|");
}
//gets the value of the input field and updates the user's calendar
title.addEventListener('input', updateValue);
function updateValue(e) {
  user.innerHTML = e.target.value + "\'s Calendar";
}
//adds a todo to the sunday list
TodoSunday.addEventListener('click', addTodo);
function addTodo() {
  const newTodoul = document.createElement("ul");
  const newTodo = document.createElement("li");
  const newTodoInput = document.createElement("input");
  newTodo.className = "container mx-auto text-black text-center bg-white-500 shadow-lg shadow-indigo-500 rounded-md m-4";
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "New Todo");
  NewTodoSunday.appendChild(newTodoul);
  newTodoul.appendChild(newTodo);
  newTodo.appendChild(newTodoInput);
}