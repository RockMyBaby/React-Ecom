import React, { useState } from "react";
import AddTodoList from "./AddTodo";

const Todo = () => {
    
    const [todoList,setTodoList] = useState([{id:1,value:"Soap"},{id:2,value:"Shampoo"}])
    const handleTodoList = (newValue) =>{
        setTodoList([...todoList,{id:todoList.length+1,value:newValue}])
    }

    const deleteHandler = (e) =>{
        console.log(e)
        
       setTodoList( todoList.filter(item=> item.id !== e))
    }
    
    return (
        <>
            <div>Happy Diwali To You</div>
            <AddTodoList addTodo={handleTodoList} />
            <ul>
            {
                
                todoList.map(item => <li onClick={() => deleteHandler(item.id)} key={item.id}>{item.value}</li>)
            }
            </ul>
        </>
        
    );
}

export default Todo;