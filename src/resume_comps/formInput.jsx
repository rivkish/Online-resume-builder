import React, { useRef } from 'react'
import { useForm } from "react-hook-form"
import WorkExperience from './workExperience';
import { changeName, changeTitle, addWork, addEducation, changeProfile,addSkill ,changePhone,changeEmail} from "../features/resumeSlice"
import { useDispatch, useSelector } from 'react-redux';
import uuid4 from 'uuid4';
import Education from './education';

import { db } from '../firebase/config'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import Skills from './skills';


const FormInput = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const nameRef = useRef()
    const titleRef = useRef()
    const profileRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    // const nameRef = register("userName", { required: true, minLength: 2 })
    const dispatch = useDispatch();
    const { experiance, educations, userName, propil, title, image, skills } = useSelector(myStore => myStore.resumeSlice)


    const addNewDoc = async () => {
        const ref = collection(db, 'resumes')
        await addDoc(ref, {
            userName: userName,
            propil: propil,
            title: title,
            experiance: experiance,
            educations: educations,
            image: image,
            skills: skills
        })
    }

    const printRes = async () => {
        const ref = collection(db, 'resumes')
        await getDocs(ref)
            .then((snapshot) => {
                let res = []
                snapshot.docs.forEach((doc) => {
                    res.push({ ...doc.data(), id: doc.id })
                })
                console.log(res)
            })
            .catch(err => console.log(err.massege))
    }






    return (
        <div className='p-5'>
            <h4>Add your details</h4>
            <label>Full name </label>
            <input required ref={nameRef} type="text" className='form-control mb-1' onInput={() => {
                dispatch(changeName({ userName: nameRef.current.value }))
            }} />
            <label>Title </label>
            <input ref={titleRef} type="text" className='form-control mb-1' onInput={() => {
                dispatch(changeTitle({ title: titleRef.current.value }))
            }} />
            <label>Phone </label>
            <input ref={phoneRef} type="text" className='form-control mb-1' onInput={() => {
                dispatch(changePhone({ phone: phoneRef.current.value }))
            }} />
            <label>Email </label>
            <input ref={emailRef} type="text" className='form-control mb-1' onInput={() => {
                dispatch(changeEmail({ email: emailRef.current.value }))
            }} />
            <label>Profile<br></br> Write a few words about yourself </label>
            <textarea ref={profileRef} type="text" className='form-control mb-1' onInput={() => {
                dispatch(changeProfile({ profile: profileRef.current.value }))
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

            <h4 className='mt-3'>Add skills <span style={{ cursor: "pointer" }} onClick={() => {
                dispatch(addSkill({ skill: { id: uuid4(), skill: ""} }))
            }}>+</span></h4>

            {
                skills.map(item => {
                    return <Skills key={item.id} item={item}></Skills>
                })
            }

            <button onClick={addNewDoc}>save</button>
            <button onClick={printRes}>print</button>





        </div>
    )
}

export default FormInput