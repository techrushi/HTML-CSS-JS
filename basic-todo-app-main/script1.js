const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addTodoBtn.disabled = true; // Initially disable the button

todoInput.addEventListener('input', function () {
    addTodoBtn.disabled = todoInput.value.trim() === '';
});

addTodoBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && todoInput.value.trim() !== '') {
        addTodo();
    }
});

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;
        todoList.appendChild(li);
        todoInput.value = '';
        addTodoBtn.disabled = true; // Disable the button after adding the todo
    }
}



