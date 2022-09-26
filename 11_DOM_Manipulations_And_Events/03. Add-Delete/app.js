function addItem() {
    let ul = document.getElementById('items');

    let input = document.getElementById('newItemText');
    let value = input.value;

    if(value.length === 0) {
        return;
    }

    let li = document.createElement('li');
    li.textContent = value;

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';

    deleteBtn.addEventListener('click', function (event) {
        event.target.parentElement.remove();
    });

    li.append(deleteBtn);

    ul.append(li);

    input.value = '';
}


    