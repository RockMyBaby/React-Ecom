import React, { useState } from "react";
import AddTodoList from "./AddTodo";

const Todo = () => {
    
    const [todoList,setTodoList] = useState(["Soap","Shampoo"])
    const handleTodoList = (value) =>{
        setTodoList([value,...todoList])
        
    }
    
    return (
        <>
            <div>Happy Diwali To You</div>
            <AddTodoList addTodo={handleTodoList} />
            <ul>
            {
                
                todoList.map(item => <li>{item}</li>)
            }
            </ul>
        </>
        
    );
}

export default Todo;