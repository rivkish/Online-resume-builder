import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import WorkExperience from './workExperience'
import resumeSlice from '../features/resumeSlice';
import Form from './form';
import FormInput from './formInput';

const myStore=configureStore({
    reducer:{
      resumeSlice
    }
  })

const AppForm = () => {
  return (
    <div >
        <Provider store={myStore}>
            <div className='row'>
                <div className='col-6'>  <FormInput></FormInput></div>
      <div className='col-6'><Form></Form></div>
        
        </div>
</Provider>
    </div>
  )
}

export default AppForm