import React, { useRef } from 'react'
import { changeEmail,changeName,changePhone,changePass,changeId} from "../features/userSlice"
import { useDispatch, useSelector } from 'react-redux'
import { auth, db } from '../firebase/config'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { useNavigate } from 'react-router'
import { useSignup } from '../hooks/useSignUp'
import { useLogin } from '../hooks/useLogin'
import { useCollection } from '../hooks/useCollection'



const Register = () => {
    const nameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()
    const dispatch = useDispatch();
  const { error, signup } = useSignup()
  const {error2, login} = useLogin()


    const { name,phone,email,password } = useSelector(myStore => myStore.userSlice)
    const {docs: users} = useCollection("users")

    const getUserId = async () => {
      console.log("from register")
      let em;
      if (auth.currentUser) {
        em = auth.currentUser.email;
        console.log(em) 
      }
      
     users.forEach(doc => {
      console.log(doc.email)
      if(doc.email==em)
      dispatch(changeId({id:doc.id}))
     });
    }


    const addUser = async () => {
        const ref = collection(db, 'users')
        await addDoc(ref, {
            name: name,
            phone: phone,
            email: email,
            password:password,
            resumes:[]
        }).then(e=> {
          console.log("then from add user")
          signup(email,password).then(()=>login(email,password)).then(()=>getUserId())
        }

        )
    }

  return (
            <div className='text-center mt-5'>
      <h3 className='pt-5'>Sign up</h3>
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
        <br />
<br />
      <label>Password: </label>
      <input ref={passRef} required type='password' className='form-control' onInput={()=>{
        dispatch(changePass({pass:passRef.current.value}))
      }}></input>
      <p className='text-danger'>{error}</p>
      <p className='text-danger'>{error2}</p>

</div>
<button className='btn btn-outline-dark my-5' onClick={addUser}>Sign up</button>



    </div>
 
  )
}

export default Register