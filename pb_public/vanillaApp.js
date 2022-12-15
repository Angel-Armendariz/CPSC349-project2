const user = document.getElementById("user");
const title = document.getElementById("title");
const TodoSunday = document.getElementById("TodoSunday");
const NewTodoSunday = document.getElementById("NewTodoSunday");
const TodoMonday = document.getElementById("TodoMonday");
const NewTodoMonday = document.getElementById("NewTodoMonday");
const TodoTuesday = document.getElementById("TodoTuesday");
const NewTodoTuesday = document.getElementById("NewTodoTuesday");
const TodoWednesday = document.getElementById("TodoWednesday");
const NewTodoWednesday = document.getElementById("NewTodoWednesday");
const TodoThursday = document.getElementById("TodoThursday");
const NewTodoThursday = document.getElementById("NewTodoThursday");
const TodoFriday = document.getElementById("TodoFriday");
const NewTodoFriday = document.getElementById("NewTodoFriday");
const TodoSaturday = document.getElementById("TodoSaturday");
const NewTodoSaturday = document.getElementById("NewTodoSaturday");
//adds a todo to the sunday list
TodoSunday.addEventListener('click', addTodoSunday);
function addTodoSunday() {
  const newTodoul = document.createElement("ul");
  const newTodo = document.createElement("li");
  const newTodoInput = document.createElement("input");
  newTodoInput.className = "container mx-auto text-black text-center bg-white-500 shadow-lg shadow-indigo-500 rounded-md m-4";
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "New Todo");
  TodoSunday.after(newTodoul);
  newTodoul.appendChild(newTodo);
  newTodo.appendChild(newTodoInput);
}
//adds a todo to the monday list
TodoMonday.addEventListener('click', addTodoMonday);
function addTodoMonday() {
  const newTodoul = document.createElement("ul");
  const newTodo = document.createElement("li");
  const newTodoInput = document.createElement("input");
  newTodoInput.className = "container mx-auto text-black text-center bg-white-500 shadow-lg shadow-indigo-500 rounded-md m-4";
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "New Todo");
  TodoMonday.after(newTodoul);
  newTodoul.appendChild(newTodo);
  newTodo.appendChild(newTodoInput);
}

//adds a todo to the tuesday list
TodoTuesday.addEventListener('click', addTodoTuesday);
function addTodoTuesday() {
  const newTodoul = document.createElement("ul");
  const newTodo = document.createElement("li");
  const newTodoInput = document.createElement("input");
  newTodoInput.className = "container mx-auto text-black text-center bg-white-500 shadow-lg shadow-indigo-500 rounded-md m-4";
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "New Todo");
  TodoTuesday.after(newTodoul);
  newTodoul.appendChild(newTodo);
  newTodo.appendChild(newTodoInput);
}

//adds a todo to the wednesday list

TodoWednesday.addEventListener('click', addTodoWednesday);
function addTodoWednesday() {
  const newTodoul = document.createElement("ul");
  const newTodo = document.createElement("li");
  const newTodoInput = document.createElement("input");
  newTodoInput.className = "container mx-auto text-black text-center bg-white-500 shadow-lg shadow-indigo-500 rounded-md m-4";
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "New Todo");
  TodoWednesday.after(newTodoul);
  newTodoul.appendChild(newTodo);
  newTodo.appendChild(newTodoInput);
}

//adds a todo to the thursday list
TodoThursday.addEventListener('click', addTodoThursday);
function addTodoThursday() {
  const newTodoul = document.createElement("ul");
  const newTodo = document.createElement("li");
  const newTodoInput = document.createElement("input");
  newTodoInput.className = "container mx-auto text-black text-center bg-white-500 shadow-lg shadow-indigo-500 rounded-md m-4";
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "New Todo");
  TodoThursday.after(newTodoul);
  newTodoul.appendChild(newTodo);
  newTodo.appendChild(newTodoInput);
}

//adds a todo to the friday list
TodoFriday.addEventListener('click', addTodoFriday);
function addTodoFriday() {
  const newTodoul = document.createElement("ul");
  const newTodo = document.createElement("li");
  const newTodoInput = document.createElement("input");
  newTodoInput.className = "container mx-auto text-black text-center bg-white-500 shadow-lg shadow-indigo-500 rounded-md m-4";
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "New Todo");
  TodoFriday.after(newTodoul);
  newTodoul.appendChild(newTodo);
  newTodo.appendChild(newTodoInput);
}

//adds a todo to the saturday list
TodoSaturday.addEventListener('click', addTodoSaturday);
function addTodoSaturday() {
  const newTodoul = document.createElement("ul");
  const newTodo = document.createElement("li");
  const newTodoInput = document.createElement("input");
  newTodoInput.className = "container mx-auto text-black text-center bg-white-500 shadow-lg shadow-indigo-500 rounded-md m-4";
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "New Todo");
  TodoSaturday.after(newTodoul);
  newTodoul.appendChild(newTodo);
  newTodo.appendChild(newTodoInput);
}


title.addEventListener('input', updateValue);
function updateValue(e) {
  user.innerHTML = e.target.value + "\'s Calendar";
}