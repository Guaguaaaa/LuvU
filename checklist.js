const todoItems = document.querySelectorAll('.todo-item');

todoItems.forEach(item => {
    item.addEventListener('click', () => {
        todoItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.querySelector('.todo-details').classList.contains('active')){
                otherItem.querySelector('.todo-details').classList.remove('active');
            }
        });

        item.querySelector('.todo-details').classList.toggle('active');
    });
});