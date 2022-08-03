document.addEventListener("DOMContentLoaded", () => {
  
  const todoForm = document.getElementById('create-task-form');
  todoForm.addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();
 

const taskList = document.getElementById('tasks');
  const task = document.createElement('li');
  task.textContent = event.target['new-task-description'].value;
  taskList.append(task);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
    task.remove();
  });
  task.append(deleteButton);

  event.target.reset();
}
