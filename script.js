// selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoContainer = document.querySelector(".todo-container");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoBtn.addEventListener("click", addItem);
todoList.addEventListener("click", removeItem);

// functions
function addItem(e) {
    e.preventDefault();

    // prevent empty items
    if (todoInput.value == "") return;

    // make todo div element
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // make a todo item
    const newTodo = document.createElement("li");
    newTodo.textContent = todoInput.value;

    // make a completed button
    const checkBtn = document.createElement("button");
    checkBtn.classList.add("completed-button");
    checkBtn.innerHTML = "<i class='fas fa-check'></i>";

    // make a trash button
    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash-button");
    trashBtn.innerHTML = "<i class='fas fa-trash'></i>";

    /// append child elements to their respective parent elements
    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(checkBtn);
    todoDiv.appendChild(trashBtn);
    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function removeItem(e) {
    // delete functionality
    const item = e.target;
    if (item.className == "trash-button") {
        const todo = item.parentElement;
        // Animation mechanism
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
            todoList.removeChild(todo);
        });
    }

    // check mark functionality
    if (item.className == "completed-button") {
        const todo = item.parentNode;
        todo.classList.toggle("completed");
    }
}