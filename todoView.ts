// todoView.ts
import { Todo } from './todoModel.js';

export const renderTodos = (todos: Todo[]): void => {
  const todoContainer = document.getElementById('todo-list') as HTMLUListElement;
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

export let onDelete: (id: number) => void = () => {};
export const setDeleteHandler = (handler: (id: number) => void): void => {
  onDelete = handler;
};
