// todoController.ts
import { addTodo, removeTodo, getTodos } from './todoModel.js';
import { renderTodos, setDeleteHandler } from './todoView.js';
const handleAddTodo = () => {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    if (todoText) {
        const newTodo = { id: Date.now(), text: todoText };
        addTodo(newTodo);
        renderTodos(getTodos());
        todoInput.value = '';
    }
};
const handleDeleteTodo = (id) => {
    removeTodo(id);
    renderTodos(getTodos());
};
export const init = () => {
    document.getElementById('add-todo').addEventListener('click', handleAddTodo);
    setDeleteHandler(handleDeleteTodo);
    renderTodos(getTodos());
};
