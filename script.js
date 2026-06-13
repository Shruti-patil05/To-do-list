document.getElementById("todoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let task = document.getElementById("task").value;
    let priority = document.getElementById("priority").value;

    document.getElementById("task").value = '';

    let newTask = {
        task: task,
        priority: priority
    };

    addTaskToList(newTask);
});

function addTaskToList(task) {
    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.classList.add("list-group-item", task.priority);
    
    li.innerHTML = `${task.task} <span class="badge badge-info float-right">${task.priority}</span>`;
   
    taskList.appendChild(li);

    sortTasks();
}

function sortTasks() {
    let taskList = document.getElementById("taskList");
    let tasks = Array.from(taskList.getElementsByTagName("li"));
    const priorityOrder = {
        High: 1,
        normal: 2,
        low: 3
    };
    tasks.sort((a, b) => {
        let priorityA = a.classList.contains('High') ? 1 : a.classList.contains('normal') ? 2 : 3;
        let priorityB = b.classList.contains('High') ? 1 : b.classList.contains('normal') ? 2 : 3;
        return priorityA - priorityB;
    });

    // Reorder the tasks in the task list
    tasks.forEach(task => taskList.appendChild(task));
}
