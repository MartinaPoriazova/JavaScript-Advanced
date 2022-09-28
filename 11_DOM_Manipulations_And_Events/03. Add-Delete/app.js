// function addItem() {
//     let ul = document.getElementById('items');

//     let input = document.getElementById('newItemText');
//     let value = input.value;

//     if(value.length === 0) {
//         return;
//     }

//     let li = document.createElement('li');
//     li.textContent = value;

//     let deleteBtn = document.createElement('a');
//     deleteBtn.textContent = '[Delete]';

//     deleteBtn.addEventListener('click', function (event) {
//         event.target.parentElement.remove();
//     });

//     li.appendChild(deleteBtn);

//     ul.append(li);

//     input.value = '';
// }

// function addItem() {
//     let list = document.getElementById('items')
//     list.addEventListener('click', deleteItem)

//     let newItemText = document.getElementById('newText')
//     let newItem = document.createElement('li')
//     newItem.innerHTML = `${newItemText.value} <a href="#:">[Delete]</a>`
//     list.appendChild(newItem)
//     newItemText.value = ''

//     function deleteItem(item) {
//         let element = item.target.parentNode
//         element.remove()
//     }
// }

function addItem() {
    // select input field
    const input = document.getElementById('newItemText');

    // create <li> and assign input value to element text content
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    // create [Delete] anchor
    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    liElement.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onDelete);

    // create  <li> and append new element
    document.getElementById('items').appendChild(liElement);

    // select input field and clear contents (value)
    input.value = '';
}

function onDelete(event) {
    event.target.parentElement.remove();
}
    