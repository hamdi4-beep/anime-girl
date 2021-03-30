const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", e => {
    e.preventDefault();
    const todoDiv = document.createElement("div");
    const newTodo = document.createElement("li");
    const completedBtn = document.createElement("button");
    const trash = document.createElement("button");

    todoDiv.classList.add("todo");
    newTodo.classList.add("todo-item");
    completedBtn.classList.add("completed-btn");
    trash.classList.add("trash-btn");
    newTodo.textContent = todoInput.value;
    todoDiv.appendChild(newTodo);
    completedBtn.innerHTML = "<i class='fas fa-check'></i>";
    trash.innerHTML = "<i class='fas fa-trash'></i>";
    todoDiv.appendChild(completedBtn);
    todoDiv.appendChild(trash);
    todoList.appendChild(todoDiv);
});

todoList.addEventListener("click", e => {
    const item = e.target;
    if (item.classList[0] == "trash-btn") {
        item.parentElement.remove();
    }
});