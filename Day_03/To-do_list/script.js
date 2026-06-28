const inputBox = document.querySelector("#inputBox");
const addBtn = document.querySelector("#addBtn");
const todolist = document.querySelector("#todolist");

let lastClick = null;
let currentInputText = "";

todolist.addEventListener('click', (e) => {
    if (e.target.innerText == 'delete') {
        todolist.removeChild(e.target.parentElement);
        
        deleteFromLocalStorage(e.target.parentElement.firstChild.textContent);
        alert("Task deletion successful!");
    }
    if (e.target.innerText == 'edit') {
        currentInputText = e.target.parentElement.firstChild.textContent;
        inputBox.value = currentInputText;
        inputBox.focus();
        addBtn.value = 'edit';
        lastClick = e.target.parentElement;
    }
});

addBtn.addEventListener('click', () => {
    const inputText = inputBox.value.trim();
    if (inputText.length <= 0) {
        alert("You must write something!...");
        return;
    }
    if (addBtn.value == "Add") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const buttonDelete = document.createElement("button");
        const editbtn = document.createElement("button");

        buttonDelete.innerText = 'delete';
        buttonDelete.classList.add('btn', 'deleteBtn');
        editbtn.innerText = 'edit';
        editbtn.classList.add('btn', 'editBtn');
        p.innerHTML = inputText;

        li.appendChild(p);
        li.appendChild(buttonDelete);
        li.appendChild(editbtn);

        todolist.appendChild(li);

        inputBox.value = '';

        inputBox.blur();
        saveToLocalStorage(inputText);
    }
    else { // if edit button clicked or add button has text edit
        if (lastClick == null)
            console.log("last click is null");
        else {
            let updated = inputBox.value;
            lastClick.firstChild.textContent = updated;
            addBtn.value = 'Add';
            inputBox.value = '';
            inputBox.blur();
            console.log("edited value after edit : "+inputBox.value);
            editLocalStorageTask(currentInputText,updated);
        }
    }
});


const saveToLocalStorage = (data) => {
    let listOfTasks = [];
    console.log(JSON.parse(localStorage.getItem("Tasks")));
    console.log(localStorage.getItem("Tasks"));

    if (JSON.parse(localStorage.getItem("Tasks")) == null) {
        console.log("Empty local storage");
    }
    else {
        listOfTasks = listOfTasks.concat(JSON.parse(localStorage.getItem("Tasks")));
        console.log(listOfTasks);
    }
    listOfTasks.push(data);
    // console.log(listOfTasks);
    localStorage.setItem('Tasks', JSON.stringify(listOfTasks));
};

const getLocalStorageData = ()=>{
    let tasks = JSON.parse(localStorage.getItem('Tasks'));
    console.log(tasks);
    
    tasks.forEach(element => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const buttonDelete = document.createElement("button");
        const editbtn = document.createElement("button");

        buttonDelete.innerText = 'delete';
        buttonDelete.classList.add('btn', 'deleteBtn');
        editbtn.innerText = 'edit';
        editbtn.classList.add('btn', 'editBtn');
        p.innerHTML = element;

        li.appendChild(p);
        li.appendChild(buttonDelete);
        li.appendChild(editbtn);

        todolist.appendChild(li);
    });

    // inputBox.value = '';
    // inputBox.blur();
};

const deleteFromLocalStorage = (text)=>{
    let tasks = JSON.parse(localStorage.getItem('Tasks'));

    tasks = tasks.filter(taskTitle => taskTitle!= text);

    console.log(tasks);
    localStorage.setItem('Tasks',JSON.stringify(tasks));
};

const editLocalStorageTask = (existing, updated)=>{
    console.log(existing+" "+updated);
    
    let tasks = JSON.parse(localStorage.getItem('Tasks'));
    tasks = tasks.map(title => title == existing ?updated :title);
    localStorage.setItem('Tasks',JSON.stringify(tasks));
};

window.onload = getLocalStorageData;