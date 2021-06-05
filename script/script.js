'use strict';

const btnAdder = document.getElementById('button');
const newToDo = document.getElementById('todo');
const listToDo = document.getElementById('todolist');


btnAdder.addEventListener('click', handlerAddToDo);

function handlerAddToDo() {
    if (!isEmpty(newToDo.value)) {
        const item = createItemOfList(newToDo.value);
        addItemToList(item);
    }

    newToDo.value = '';
}

function isEmpty(str) {
    return str.trim() === '';
}

function createItemOfList(contentItem) {
    const item = document.createElement('li');

    item.classList.add('list__item');
    item.textContent = contentItem;

    return item;
}

function addItemToList(item) {
    listToDo.append(item);
}