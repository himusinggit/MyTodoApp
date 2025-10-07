import React, { useState } from 'react'
import dataService from '../appwrite/config'
function Todo({todo,todoId,...props}) {
    const [isDeleted, setIsDeleted] = useState(false);
    const deleteTodo=()=>{
        localStorage.setItem("todos",JSON.stringify(JSON.parse(localStorage.getItem("todos")).filter((res)=>res.$id!==todoId)));
        dataService.deleteRow(todoId);
        setIsDeleted(true);
    }
    return (
        <div className={`bg-[#001ba1] p-[0.5rem] rounded-[10px] flex justify-between items-center text-white ${isDeleted && "hidden"}`} {...props}>
            <p>{todo}</p>
            <i onClick={deleteTodo} className={`ri-close-large-line`}></i>
        </div>
    )
}

export default Todo
