function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  list.innerHTML = "";
  // list.appendChild(list.createElement("p").innerText="My To Do List");
  todos.forEach((todo, index) => {
    const listItem = document.createElement("li");
    listItem.className = 'todo-item';
    listItem.style.textDecoration = todo.completed ? 'line-through' : 'none';
    

    //Creating the text node for the task
    const taskText = document.createTextNode(todo.task);
    listItem.appendChild(taskText);

    //Creating Span container for the buttons
    const buttonContainer = document.createElement("span");
    buttonContainer.className = 'inner-button-container';

    //Creating the complete button
    const completeButton = document.createElement("button");
    completeButton.textContent = 'Complete ✔️';
    completeButton.onclick = () => toggleComplete(index);
    buttonContainer.appendChild(completeButton);

  // Create the 'Delete' button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete 🗑️';
  deleteButton.onclick = () => deleteTask(index);
  buttonContainer.appendChild(deleteButton);    

    // Append the button container to the list item
    listItem.appendChild(buttonContainer);

    list.appendChild(listItem);
   });
}


let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  populateTodoList(todos);
}

function deleteTask(index) {
  todos.splice(index, 1);
  populateTodoList(todos);
}

function addNewTodo(event) {

  event.preventDefault();

  const taskInput = document.getElementById("todoInput");
  const task = taskInput.value.trim();
  if (task){
    todos.push({task, completed: false});
    populateTodoList(todos);
    taskInput.value = "";
    populateTodoList(todos);
  }
}
document.getElementById('todo-form').addEventListener('submit', addNewTodo);
document.getElementById('remove-all-completed').addEventListener('click', deleteAllCompletedTodos);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  todos = todos.filter(todo => !todo.completed);
  populateTodoList(todos);
}
