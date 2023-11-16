import React, { useRef } from "react";



const AddTodoList = (props) => {
    const addTodoName = useRef();
    const addTodoNameHandler =(e) => {
        

    }

    const addTodoHandler =()=>{
        props.addTodo(addTodoName.current.value)
        addTodoName.current.value = ""
    }


    return (
        <>
            <input type="text" ref={addTodoName} onChange={addTodoNameHandler} />
            <button onClick={addTodoHandler} >Add Todo</button>
        </>
    )
}

export default AddTodoList;