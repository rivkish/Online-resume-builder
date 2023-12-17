import React, { useRef } from 'react'
import {useSelector,useDispatch} from "react-redux"
import {add1,resetCounter,addCustom,changeName} from "../features/counterSlice"

const Counter = () => {
    const inputRef=useRef()
    const dispatch=useDispatch();
    const {counter ,user}=useSelector(myStore=>myStore.counterSlice)

  return (
    <div className='container text-center'>
<h2>{counter}</h2>
<button className='btn btn-info me-2' onClick={()=>{dispatch(add1())}}>add</button>
<button className='btn btn-dark me-2' onClick={()=>{dispatch(resetCounter())}}>reset</button>
<button className='btn btn-info' onClick={()=>{dispatch(addCustom({val:5}))}}>add 5</button>
<input className='form-control' ref={inputRef} type="text" />
<button className='btn btn-info' onClick={()=>{dispatch(changeName({val:inputRef.current.value}))}}>change name</button>

<h3>user: {user}</h3>
    </div>
  )
}

export default Counter