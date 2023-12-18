import React from 'react'

const Home = () => {
  return (
    <div className='text-center mt-5'>
      
      <h3 className='pt-5'>ONLINE RESUME BUILDER</h3>
      <h4>Write your resume for free and easily</h4>
<div className='text-start w-25 m-auto ps-4 mt-5'>
        <label>User name: </label>
      <input required type='text' className='form-control'></input>
<br />
<br />
      <label>Email: </label>
      <input required type='email' className='form-control'></input>
</div>
<button className='btn btn-outline-dark my-5'>Sign in</button>

<p>Don't have an account yet? <span>Log in here</span></p>

    </div>
  )
}

export default Home