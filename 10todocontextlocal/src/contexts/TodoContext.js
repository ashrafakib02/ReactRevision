import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "Learn React Context API",
        completed: false,
    }],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, updatedTodo) => {},
    toggleComplete: (id) => {},
});
    
export const TodoProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}