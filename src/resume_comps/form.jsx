import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import WorkExperience from './workExperience';
import { useSelector } from 'react-redux';


const Form = () => {

    const { experiance, userName, educations, image, title } = useSelector(myStore => myStore.resumeSlice)

    //   const {register,handleSubmit,formState:{errors},getValues}=useForm();


    //   const onSub=(dataBody)=>{
    //     console.log(dataBody)
    //   }


    //   const nameRef=register("name",{required:true,minLength:2})
    //   const experienceRef = register("experience")
    //   const educationRef = register("education",{required:true})
    //   const skillsRef = register("skills",{required:true})
    //   const imageRef=register("image")



    return (
        <div className='border p-5'>
            <h1>{userName}</h1>
            <p>{title}</p>
            {experiance.length > 0 && <h3><strong>Work experience</strong></h3>}

            {experiance.map(item => {
                return <div key={item.id} className='w-50'>
                    <h4> {item.companyName}</h4>
                    <p>  {new Date(item.timeStart).getFullYear() || ""} - {new Date(item.timeEnd).getFullYear() || ""}</p>
                </div>
            })}

            {educations.length > 0 && <h3><strong>Education</strong></h3>}

            {educations.map(item => {
                return <div key={item.id} className='w-50'>
                    <h4> {item.school}</h4>
                    <p>  {new Date(item.timeStart).getFullYear() || ""} - {new Date(item.timeEnd).getFullYear() || ""}</p>
                </div>
            })}

            {/* <form onSubmit={handleSubmit(onSub)} className='col-md-6 p-2'> */}



            {/* <label>Name: </label>
  <input {...nameRef} type="text" className='form-control'/>
  {errors.name&&<div className='text-danger'>* Enter valid name: min 2 chars</div>}

  <label>Eail: </label>
  <input {...emailRef} type="email" className='form-control'/>
  {errors.email&&<div className='text-danger'>* Enter valid email</div>}

  <label>Email again: </label>
  <input {...email2Ref} type="email" className='form-control'/>
  {errors.email2&&<div className='text-danger'>* Email not match</div>} */}






            {/* <br /> */}
            {/* <button className='btn btn-info'>send</button> */}
            {/* </form> */}
        </div>
    )
}

export default Form