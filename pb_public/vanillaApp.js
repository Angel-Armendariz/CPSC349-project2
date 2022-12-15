const user = document.getElementById("user");
const title = document.getElementById("title");

title.addEventListener('input', updateValue);
function updateValue(e) {
  user.innerHTML = e.target.value + "\'s Calendar";
}

TodoSunday.addEventListener('click', addTodo);
function addTodo() {
  const newTodoInput = document.createElement("input");
  newTodo.className = "container mx-auto text-black text-center bg-white-500 shadow-lg shadow-indigo-500 rounded-md m-4";
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "New Todo");
  NewTodoSunday.appendChild(newTodoInput);
}