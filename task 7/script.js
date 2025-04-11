document.getElementById("addTask").addEventListener("click", function () {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
  
    if (taskText === "") return;
  
    const task = document.createElement("li");
  
    // Add text
    task.innerText = taskText;
  
    // Toggle done class on click
    task.addEventListener("click", function () {
      task.classList.toggle("done");
    });
  
    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent toggling 'done'
      task.remove();
    });
  
    task.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(task);
    input.value = ""; // Clear input
  });
  