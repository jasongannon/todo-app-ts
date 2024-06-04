// todoModel.ts

export interface Todo {
  id: number;
  text: string;
}

const todoList: Todo[] = [];

export const addTodo = (todo: Todo): Todo[] => {
  todoList.push(todo);
  return todoList;
};

export const removeTodo = (id: number): Todo[] => {
  const index = todoList.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todoList.splice(index, 1);
  }
  return todoList;
};

export const getTodos = (): Todo[] => [...todoList];
