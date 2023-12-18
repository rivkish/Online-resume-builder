import React, { useRef } from 'react'
import { changeEmail,changeName,changePhone} from "../features/userSlice"
import { useDispatch, useSelector } from 'react-redux'

import { db } from '../firebase/config'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { useNavigation } from 'react-router'


const Register = () => {
    const nameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const dispatch = useDispatch();

    const { name,phone,email } = useSelector(myStore => myStore.userSlice)

// let nav=useNavigation()

    const addUser = async () => {
        const ref = collection(db, 'users')
        await addDoc(ref, {
            name: name,
            phone: phone,
            email: email
        }).then(e=> {
            localStorage.setItem("user", JSON.stringify(e._key.path.segments[1]));  
            // nav('/main') 
        }

        )
    }

  return (
            <div className='text-center mt-5'>
      <h3 className='pt-5'>Register here</h3>
<div className='text-start w-25 m-auto ps-4 mt-5'>
        <label>User name: </label>
      <input ref={nameRef} required type='text' className='form-control' onInput={()=>{
        dispatch(changeName({name:nameRef.current.value}))
      }}></input>
<br />
<br />
      <label>Email: </label>
      <input ref={emailRef} required type='email' className='form-control' onInput={()=>{
        dispatch(changeEmail({email:emailRef.current.value}))
      }}></input>
      <br />
<br />
      <label>Phone: </label>
      <input ref={phoneRef} required type='tel' className='form-control' onInput={()=>{
        dispatch(changePhone({phone:phoneRef.current.value}))
      }}></input>
</div>
<button className='btn btn-outline-dark my-5' onClick={addUser}>Regidter</button>



    </div>
 
  )
}

export default Register