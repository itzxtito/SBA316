// Cache elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.querySelector("#taskList");
const showTasksButton = document.querySelector("#showTasksButton");

// Add task
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  // Validate input
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a DocumentFragment
  const fragment = document.createDocumentFragment();

  // Create task element
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  taskItem.setAttribute("data-id", Date.now()); // Attribute modification

  // Add complete button
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  // Add remove button
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.style.backgroundColor = "red";
  removeButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  // Append buttons to task item
  taskItem.appendChild(completeButton);
  taskItem.appendChild(removeButton);

  // Add task to the fragment
  fragment.appendChild(taskItem);

  // Add fragment to the task list
  taskList.appendChild(fragment);

  // Clear input field
  taskInput.value = "";
});

// Add keyboard support (Enter key)
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskButton.click();
  }
});

// Iterate over task list and log tasks
showTasksButton.addEventListener("click", () => {
  Array.from(taskList.children).forEach((task) => {
    console.log(`Task: ${task.textContent.trim()}`);
  });
  alert(`There are ${taskList.children.length} tasks.`);
});

// Use a BOM method
console.log(`Current Browser Language: ${window.navigator.language}`);