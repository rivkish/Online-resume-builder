// import React, { useRef } from 'react'
// import { useDispatch } from 'react-redux'
// import {addTodo,resetTodo} from  '../features/resumeSlice'

// const TodoInput = () => {
//     const dis=useDispatch()
//     const nameRef=useRef()
//     const timeRef=useRef()

//     const addNewTodo=()=>{
//         let todoBody={
//             name:nameRef.current.value,
//             time:timeRef.current.value,
//             id:Date.now()  
//         }
//          dis(addTodo({todo:todoBody}))
//          document.querySelector("input").value=""
//     }

//   return (
//     <div className='container col-md-6'>
// <h2>Add new task</h2>
// <label>Name:</label>
// <input ref={nameRef} type="text" className='form-control'/>
// <label>Time:</label>
// <input ref={timeRef} type="time" className='form-control' defaultValue="09:00"/>
// <button className='btn btn-success m-2' onClick={addNewTodo}>Add</button>
// <button className='btn btn-danger' onClick={()=>dis(resetTodo())}>Reset</button>
//     </div>
//   )
// }

// export default TodoInput