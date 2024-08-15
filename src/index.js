// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the form and task list elements
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Add an event listener to handle form submission
  form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the task description from the input field
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;
    
    // Create a new list item for the task
    const listItem = document.createElement("li");
    listItem.textContent = taskDescription;
    
    // Add the new list item to the task list
    taskList.appendChild(listItem);
    
    // Clear the input field
    taskInput.value = "";
  });
});
