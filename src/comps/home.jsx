
import React, { useEffect, useRef } from 'react'
import { useLogin } from '../hooks/useLogin'
import { useSignup } from '../hooks/useSignUp'
import { useLogout } from "../hooks/useLogOut";



export default function Home() {

  const {error, login} = useLogin()
  const mailRef = useRef();
  const passRef = useRef();
  // const { error, signup } = useSignup()
  const {logout} = useLogout();

  useEffect(()=>{
    logout()
  },[])

  const onSub = (e) => {
    e.preventDefault();
    login(mailRef.current.value, passRef.current.value)
  }

  return (
    <div className='container'>
      <form onSubmit={onSub}>
        <div className='text-center mt-5'>
          <h3 className='pt-5'>ONLINE RESUME BUILDER</h3>
          <h4>Write your resume for free and easily</h4>
          <div className='text-start w-25 m-auto ps-4 mt-5'>

            <label>Email:</label>
            <input ref={mailRef} required type="email" className='form-control' />
            <br />
            <label>Password:</label>
            <input ref={passRef} required type="password" className='form-control' />
            <p className='text-danger'>{error}</p>
          </div>
          <button className='btn btn-outline-dark my-5'>Login</button>

          <p>Don't have an account yet? <a href='./register'>Log in here</a></p>

        </div>
      </form>
    </div>
  )
}






{/* <div className='container'>
      <form onSubmit={onSub}>
    <div className='text-center mt-5'>
      
      <h3 className='pt-5'>ONLINE RESUME BUILDER</h3>
      <h4>Write your resume for free and easily</h4>
<div className='text-start w-25 m-auto ps-4 mt-5'>
        <label>Email: </label>
      <input ref={mailRef} required type='email' className='form-control'></input>
<br />
<br />
      <label>Password: </label>
      <input ref={passRef} required type='password' className='form-control'></input>
</div>
<button className='btn btn-outline-dark my-5' >Sing up</button>

<p>Don't have an account yet? <a href='./register'>Log in here</a></p>

    </div>
    </form>
    </div> */}