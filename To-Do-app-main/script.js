var todoInput = document.getElementById('todo-input');
var addTodoButton = document.getElementById('add-todo');
var todoList = document.getElementById('todo-list');

var todos = [];

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    var todoItem = document.createElement('li');
    
    var todoText = document.createElement('span');
    todoText.textContent = todo.text;
    
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = () => editTodo(index);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTodo(index);
    
    todoItem.appendChild(todoText);
    todoItem.appendChild(editButton);
    todoItem.appendChild(deleteButton);
    
    todoList.appendChild(todoItem);
  });
}

function addTodo() {
  var todoText = todoInput.value.trim();
  if (todoText === '') return;
  todos.push({ text: todoText });
  todoInput.value = '';
  renderTodos();
}

function editTodo(index) {
  var newText = prompt('Edit your task:', todos[index].text);
  if (newText) {
    todos[index].text = newText;
    renderTodos();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

addTodoButton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTodo();
});

renderTodos();
