
import React, {useState} from 'react'


const Counter = () => {

    const [counter,setCounter]=useState(2)
    const [user,setUser]=useState("riv")
    const addCounter=()=>{
        setCounter(counter+1)
        setUser("riv +")
    }
    const minusCounter=()=>{
        setCounter(counter-1)
        setUser("riv -")
        
    }
  return (
    <>
    <h2>counter: {counter}</h2>
    <div>{user}</div>
    <button onClick={addCounter} >+</button>
    <button onClick={minusCounter}>-</button>
    </>
  )
}

export default Counter
