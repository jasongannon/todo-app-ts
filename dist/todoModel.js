// todoModel.ts
const todoList = [];
export const addTodo = (todo) => {
    todoList.push(todo);
    return todoList;
};
export const removeTodo = (id) => {
    const index = todoList.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todoList.splice(index, 1);
    }
    return todoList;
};
export const getTodos = () => [...todoList];
