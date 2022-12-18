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

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const todoInput = document.getElementById('todo-input')

//adds a todo to the sunday list
TodoSunday.addEventListener('click', addTodoSunday);
function addTodoSunday() {
  const newTodoul = document.createElement("ul");
  const newTodo = document.createElement("li");
  const newTodoInput = document.createElement("input");
  const removeTodo = document.createElement("button");
  newTodoInput.className = "container mx-auto text-black text-center bg-white-500 shadow-lg shadow-indigo-500 rounded-md m-4";
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "New Todo");
  removeTodo.className = "container mx-auto text-black text-center bg-red-500 shadow-lg shadow-red-500 rounded-md m-4";
  removeTodo.innerHTML = "Remove Todo";
  TodoSunday.after(newTodoul);
  newTodoul.appendChild(newTodo);
  newTodo.appendChild(removeTodo);
  newTodo.appendChild(newTodoInput);
  removeTodo.addEventListener('click', removeTodoSunday);
  function removeTodoSunday() {
    newTodo.remove();
  }
}
//adds a todo to the monday list
TodoMonday.addEventListener('click', addTodoMonday);
function addTodoMonday() {
  const newTodoul = document.createElement("ul");
  const newTodo = document.createElement("li");
  const newTodoInput = document.createElement("input");
  const removeTodo = document.createElement("button");
  newTodoInput.className = "container mx-auto text-black text-center bg-white-500 shadow-lg shadow-indigo-500 rounded-md m-4";
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "New Todo");
  removeTodo.className = "container mx-auto text-black text-center bg-red-500 shadow-lg shadow-red-500 rounded-md m-4";
  removeTodo.innerHTML = "Remove Todo";
  TodoMonday.after(newTodoul);
  newTodoul.appendChild(newTodo);
  newTodo.appendChild(removeTodo);
  newTodo.appendChild(newTodoInput);
  removeTodo.addEventListener('click', removeTodoMonday);
  function removeTodoMonday() {
    newTodo.remove();
  }
}

//adds a todo to the tuesday list
TodoTuesday.addEventListener('click', addTodoTuesday);
function addTodoTuesday() {
  const newTodoul = document.createElement("ul");
  const newTodo = document.createElement("li");
  const newTodoInput = document.createElement("input");
  const removeTodo = document.createElement("button");
  newTodoInput.className = "container mx-auto text-black text-center bg-white-500 shadow-lg shadow-indigo-500 rounded-md m-4";
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "New Todo");
  removeTodo.className = "container mx-auto text-black text-center bg-red-500 shadow-lg shadow-red-500 rounded-md m-4";
  removeTodo.innerHTML = "Remove Todo";
  TodoTuesday.after(newTodoul);
  newTodoul.appendChild(newTodo);
  newTodo.appendChild(removeTodo);
  newTodo.appendChild(newTodoInput);
  removeTodo.addEventListener('click', removeTodoTuesday);
  function removeTodoTuesday() {
    newTodo.remove();
  }
}

//adds a todo to the wednesday list

TodoWednesday.addEventListener('click', addTodoWednesday);
function addTodoWednesday() {
  const newTodoul = document.createElement("ul");
  const newTodo = document.createElement("li");
  const newTodoInput = document.createElement("input");
  const removeTodo = document.createElement("button");
  newTodoInput.className = "container mx-auto text-black text-center bg-white-500 shadow-lg shadow-indigo-500 rounded-md m-4";
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "New Todo");
  removeTodo.className = "container mx-auto text-black text-center bg-red-500 shadow-lg shadow-red-500 rounded-md m-4";
  removeTodo.innerHTML = "Remove Todo";
  TodoWednesday.after(newTodoul);
  newTodoul.appendChild(newTodo);
  newTodo.appendChild(removeTodo);
  newTodo.appendChild(newTodoInput);
  removeTodo.addEventListener('click', removeTodoWednesday);
  function removeTodoWednesday() {
    newTodo.remove();
  }
}

//adds a todo to the thursday list
TodoThursday.addEventListener('click', addTodoThursday);
function addTodoThursday() {
  const newTodoul = document.createElement("ul");
  const newTodo = document.createElement("li");
  const newTodoInput = document.createElement("input");
  const removeTodo = document.createElement("button");
  newTodoInput.className = "container mx-auto text-black text-center bg-white-500 shadow-lg shadow-indigo-500 rounded-md m-4";
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "New Todo");
  removeTodo.className = "container mx-auto text-black text-center bg-red-500 shadow-lg shadow-red-500 rounded-md m-4";
  removeTodo.innerHTML = "Remove Todo";
  TodoThursday.after(newTodoul);
  newTodoul.appendChild(newTodo);
  newTodo.appendChild(removeTodo);
  newTodo.appendChild(newTodoInput);
  removeTodo.addEventListener('click', removeTodoThursday);
  function removeTodoThursday() {
    newTodo.remove();
  }
}

//adds a todo to the friday list
TodoFriday.addEventListener('click', addTodoFriday);
function addTodoFriday() {
  const newTodoul = document.createElement("ul");
  const newTodo = document.createElement("li");
  const newTodoInput = document.createElement("input");
  const removeTodo = document.createElement("button");
  newTodoInput.className = "container mx-auto text-black text-center bg-white-500 shadow-lg shadow-indigo-500 rounded-md m-4";
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "New Todo");
  removeTodo.className = "container mx-auto text-black text-center bg-red-500 shadow-lg shadow-red-500 rounded-md m-4";
  removeTodo.innerHTML = "Remove Todo";
  TodoFriday.after(newTodoul);
  newTodoul.appendChild(newTodo);
  newTodo.appendChild(removeTodo);
  newTodo.appendChild(newTodoInput);
  removeTodo.addEventListener('click', removeTodoFriday);
  function removeTodoFriday() {
    newTodo.remove();
  }
}

//adds a todo to the saturday list
TodoSaturday.addEventListener('click', addTodoSaturday);
function addTodoSaturday() {
  const newTodoul = document.createElement("ul");
  const newTodo = document.createElement("li");
  const newTodoInput = document.createElement("input");
  const removeTodo = document.createElement("button");
  newTodoInput.className = "container mx-auto text-black text-center bg-white-500 shadow-lg shadow-indigo-500 rounded-md m-4";
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "New Todo");
  removeTodo.className = "container mx-auto text-black text-center bg-red-500 shadow-lg shadow-red-500 rounded-md m-4";
  removeTodo.innerHTML = "Remove Todo";
  TodoSaturday.after(newTodoul);
  newTodoul.appendChild(newTodo);
  newTodo.appendChild(removeTodo);
  newTodo.appendChild(newTodoInput);
  removeTodo.addEventListener('click', removeTodoSaturday);
  function removeTodoSaturday() {
    newTodo.remove();
  }
}
<<<<<<< HEAD
=======


title.addEventListener('input', updateValue);
function updateValue(e) {
  user.innerHTML = e.target.value + "\'s Calendar";
}



const todoTemplate = (todoTitle) => `
  <div class="todo-container text-gray-700 text-center mt-2">
    <div class="flex justify-between bg-yellow-100 shadow mb-2">
      <span class="w-full text-left leading-loose p-2 pl-10 cursor-pointer" onClick="checkTodo(this)">${todoTitle}</span>
      <div class="close-btn p-2 pr-8 text-xl cursor-pointer"></div>
    </div>
  </div>
`
const newTodo = () => {
  if (! todoInput.checkValidity()) {
    alert("Memo Content Empty")
    
    return false
  }

  list.insertAdjacentHTML('beforeend', todoTemplate(todoInput.value))
  list.lastElementChild.querySelector('.close-btn').addEventListener('click', deleteTodo)

  itemCountSpan.innerHTML++
  uncheckedCountSpan.innerHTML++

  todoInput.value = ""
}


const checkTodo = (el) => {
  el.classList.toggle('checked')

  if (el.classList.contains('checked')) {
    uncheckedCountSpan.innerHTML--
  } else {
    uncheckedCountSpan.innerHTML++
  }
}

const deleteTodo = (el) => {  
  const todoContainer = el.target.parentElement

  todoContainer.parentNode.removeChild(el.target.parentElement)

  if (! todoContainer.querySelector('.checked')) {
    uncheckedCountSpan.innerHTML--
  }

  itemCountSpan.innerHTML--
}
>>>>>>> 354b0554e34d66d89c31bac5460b4dd7645434b2
