import React, { useRef } from 'react'
import {useSelector,useDispatch} from "react-redux"
import {addTodo,resetTodo} from "../features/resumeSlice"

const TodoList = () => {

    const {todos_ar}=useSelector(myStore=>myStore.todoSlice)
  return (
    <div className='container col-md-6'>
        {todos_ar.map(item=>{
            return <div key={item.id} className='card w-50 text-center'>
                <h2> {item.name}</h2>
                <p> time: {item.time}</p>
            </div>
        })}
    </div>
  )
}

export default TodoList