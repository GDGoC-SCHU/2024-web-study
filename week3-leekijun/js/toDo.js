const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDos = [];


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}



function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);
