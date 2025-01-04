const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");

let toDos = [];

const TODOS_KEY = "todos";

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDosObj = {
        id: Date.now(),
        text: newTodo,
    };
    toDos.push(newToDosObj);
    paintToDo(newToDosObj);
    saveToDos();
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    //toDos = toDos.filter((toDos)=> toDos.id !== parseInt(li.id));
    toDos = toDos.filter((toDo) => toDo.id !== Number(li.id));

    saveToDos();
}


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}


function numFilter(){
}

//[1,2,3,4].filter(numFilter)
