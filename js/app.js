const addToDoButton = document.querySelector('#addTask');
const inputField = document.querySelector('#userTaskInput');
const toDoContainer = document.querySelector('.todos');

inputField.addEventListener('click', selectInput);
addToDoButton.addEventListener('click', addTask);


function selectInput() {
    inputField.style['boxShadow'] = '0 6px 2px -2px green';
}

function addTask() {
    if(inputField.value.trim().length) {
        //new li
        let newToDo = document.createElement('li');
        //li class
        newToDo.classList.add('li-styling');
       //add text
        newToDo.innerText = inputField.value
        toDoContainer.appendChild(newToDo);

        newToDo.addEventListener('click', () => {
            newToDo.style.color = 'grey';
            newToDo.style.textDecoration = 'line-through';
        });

        newToDo.addEventListener('dblclick', () => {
            toDoContainer.removeChild(newToDo);
        });
    }
    else {
        inputField.style['boxShadow'] = '0 6px 2px -2px red';
    }

    inputField.value = '';
}