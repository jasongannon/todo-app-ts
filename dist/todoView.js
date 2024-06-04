export const renderTodos = (todos) => {
    const todoContainer = document.getElementById('todo-list');
    todoContainer.innerHTML = ''; // Clear the list
    todos.forEach((todo) => {
        const todoItem = document.createElement('li');
        todoItem.textContent = todo.text;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            onDelete(todo.id);
        };
        todoItem.appendChild(deleteButton);
        todoContainer.appendChild(todoItem);
    });
};
export let onDelete = () => { };
export const setDeleteHandler = (handler) => {
    onDelete = handler;
};
