import React, { useRef } from 'react'
import { useForm } from "react-hook-form"
import WorkExperience from './workExperience';
import { changeName, changeTitle, addWork,addEducation } from "../features/resumeSlice"
import { useDispatch, useSelector } from 'react-redux';
import uuid4 from 'uuid4';
import Education from './education';


const FormInput = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const nameRef = useRef()
    const titleRef = useRef()
    // const nameRef = register("userName", { required: true, minLength: 2 })
    const dispatch = useDispatch();
    const { experiance, educations } = useSelector(myStore => myStore.resumeSlice)


    return (
        <div className='p-5'>
            <h4>Add your details</h4>
            <label>Full name: </label>
            <input required ref={nameRef} type="text" className='form-control' onInput={() => {
                dispatch(changeName({ userName: nameRef.current.value }))
            }} />
            <label>Title: </label>
            <input ref={titleRef} type="text" className='form-control' onInput={() => {
                dispatch(changeTitle({ title: titleRef.current.value }))
            }} />

            <h4 className='mt-3'>Add experiance <span style={{ cursor: "pointer" }} onClick={() => {
                dispatch(addWork({ work: { id: uuid4(), companyName: "", timeStart: "", timeEnd: "" } }))
            }}>+</span></h4>

            {
                experiance.map(item => {
                    return <WorkExperience key={item.id} item={item}></WorkExperience>
                })
            }

            <h4 className='mt-3'>Add education <span style={{ cursor: "pointer" }} onClick={() => {
                dispatch(addEducation({ education: { id: uuid4(), school: "", timeStart: "", timeEnd: "" } }))          
            }}>+</span></h4>

            {
                educations.map(item => {
                    return <Education key={item.id} item={item}></Education>
                })
            }

            


        </div>
    )
}

export default FormInput