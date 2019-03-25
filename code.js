const form = document.querySelector('form');
const inputAdd = document.querySelector('.add');
const inputSearch = document.querySelector('.inputSearch');
const btnReset = document.querySelector('.reset');
const taskNumber = document.querySelector('h1 span');
const ul = document.querySelector('ul');
const search = document.querySelector('.search');
const btn = document.querySelector('.btnSearch');


const toDoList = [];

const searchTask = () => {
    const searchText = inputSearch.value.toLowerCase();
    let tasks = toDoList;
    tasks = tasks.filter(element => element.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(element => ul.appendChild(element));
    taskNumber.textContent = tasks.length;
}

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    renderList()
    taskNumber.textContent = toDoList.length;
}

const addTask = (e) => {
    e.preventDefault()
    const taskTitle = inputAdd.value;
    if (taskTitle === "") return
    const task = document.createElement('li');
    task.innerHTML = taskTitle + '  <button class="delete"><i class="far fa-times-circle"></i></button>'
    toDoList.push(task)
    renderList()
    inputAdd.value = "";
    taskNumber.textContent = toDoList.length;
    task.querySelector('button').addEventListener('click', removeTask);
}

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
}

const resetAll = () => {
    toDoList.length = 0;
    taskNumber.textContent = 0;
    ul.textContent = "";
    inputSearch.value = "";
}

form.addEventListener('submit', addTask);

inputSearch.addEventListener('input', searchTask);

btnReset.addEventListener("click", resetAll);

btn.addEventListener("click", (e) => {
    e.preventDefault();
    search.classList.toggle('active');
})


