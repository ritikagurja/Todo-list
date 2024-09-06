const pendingTasks = document.getElementById('pending-tasks');
const completedTasks = document.getElementById('completed-tasks');
const taskInput = document.getElementById('task-input');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = createTaskElement(taskText);
        pendingTasks.appendChild(taskItem);
        taskInput.value = '';
    }
}

function createTaskElement(text) {
    const li = document.createElement('li');
    li.innerText = text;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('task-buttons');

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerText = 'Complete';
    completeBtn.onclick = () => completeTask(li);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerText = 'Edit';
    editBtn.onclick = () => editTask(li);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'Delete';
    deleteBtn.onclick = () => deleteTask(li);

    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);
    li.appendChild(buttonsDiv);

    return li;
}

function completeTask(taskItem) {
    taskItem.classList.add('completed');
    taskItem.querySelector('.complete-btn').remove();
    completedTasks.appendChild(taskItem);
}

function editTask(taskItem) {
    const newTaskText = prompt('Edit task', taskItem.firstChild.nodeValue);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskItem.firstChild.nodeValue = newTaskText;
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}
