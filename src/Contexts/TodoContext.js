import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos : [{
        id: 1,
        todo: "Todo",
        completed: false,
    }],
    addtodo : (todo)=>{},
    updatetodo: (id,todo)=>{},
    deletetodo: (id)=>{},
    togglecomplete: (id)=>{}
});

export const UseTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider    