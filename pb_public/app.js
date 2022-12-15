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