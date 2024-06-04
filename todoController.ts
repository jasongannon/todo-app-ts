// todoController.ts
import { addTodo, removeTodo, getTodos, Todo } from './todoModel.js';
import { renderTodos, setDeleteHandler } from './todoView.js';

const handleAddTodo = (): void => {
  const todoInput = document.getElementById('todo-input') as HTMLInputElement;
  const todoText = todoInput.value.trim();
  if (todoText) {
    const newTodo: Todo = { id: Date.now(), text: todoText };
    addTodo(newTodo);
    renderTodos(getTodos());
    todoInput.value = '';
  }
};

const handleDeleteTodo = (id: number): void => {
  removeTodo(id);
  renderTodos(getTodos());
};

export const init = (): void => {
  document.getElementById('add-todo')!.addEventListener('click', handleAddTodo);
  setDeleteHandler(handleDeleteTodo);
  renderTodos(getTodos());
};
