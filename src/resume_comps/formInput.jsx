import React, { useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form"
import WorkExperience from './workExperience';
import { changeName, changeTitle, addWork, addEducation, changeProfile, addSkill, changePhone, changeEmail, changeImage } from "../features/resumeSlice"
import { changeClass1,changeClass2, changeClass3 } from "../features/otherSlice"
import { useDispatch, useSelector } from 'react-redux';
import uuid4 from 'uuid4';
import Education from './education';

import { db, storage } from '../firebase/config'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'

import Skills from './skills';
import { useNavigate } from 'react-router';



const FormInput = () => {
    const nameRef = useRef()
    const titleRef = useRef()
    const profileRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const nav = useNavigate()
    const dispatch = useDispatch();

    const { experiance, educations, userName, profile, title, image, skills, phone, email } = useSelector(myStore => myStore.resumeSlice)
    const { resumes, id } = useSelector(myStore => myStore.userSlice)
    const [upImage, setUpImage] = useState(null)
    const [color, setColor] = useState('')
    const [colorSide, setColorSide] = useState(false)
    // const [urlimg,setUrlimg]=useState("")
    // const [imglist,setimglist]=useState([])
    // const imgListRef=ref(storage,"images/")

    let arrId = []
    arrId = resumes.map(item => item.id)

    useEffect(() => {
        if (upImage)
            uploadImage()
    }, [upImage])

    useEffect(() => {
        if(colorSide==true){
            console.log("yes")
            dispatch(changeClass3({ design3: color }))
        } 
        else{
            dispatch(changeClass1({ design1: color }))
        }
    }, [color])


    

    const uploadImage = () => {
        if (upImage == null) return;

        const imgRef = ref(storage, `images/${upImage.name + uuid4()}`)
        uploadBytes(imgRef, upImage).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url)
                dispatch(changeImage({ image: url }))
            })
        })
    }

    //     const printImg=()=>{
    // listAll(imgListRef).then((res)=>{
    // res.items.forEach((item)=>{
    //     getDownloadURL(item).then((url)=>{
    //         console.log(url)
    //         setimglist((prev)=>[...prev,url])
    //     })
    // })
    // })
    //     }


    const addNewDoc = async () => {
        const ref = collection(db, 'resumes')
        await addDoc(ref, {
            userName: userName || "",
            profile: profile || "",
            title: title || "",
            experiance: experiance,
            educations: educations,
            image: image || "",
            skills: skills || [],
            email: email || "",
            phone: phone | ""
        })
            .then((e) => {
                arrId.push(e._key.path.segments[1])
                console.log(e._key.path.segments[1])
                onEditDoc()
            })
    }



    const onEditDoc = async () => {
        const ref = doc(db, "users", id)
        await updateDoc(ref, {
            resumes: arrId
        });
        nav('/main')
    }



    const change = (num) => {
        if (num < 5) {      
            if (num == 1){
                setColor('text-white bg-danger')
            }    
            else if (num == 2)
            setColor('text-white   bg-info')
            else if (num == 3)
            setColor('text-white   bg-dark')
            else
            setColor('text-white   bg-warning')
            // dispatch(changeClass1({ design1: color }))
        }
        else{
            let c = ''
            let c2 = ''
            if (num == 5){
                c = 'text-center'
            setColorSide(false)
            dispatch(changeClass3({ design3: '' }))

            }
            else if (num == 6){
                dispatch(changeClass1({ design1: '' }))
            dispatch(changeClass3({ design3: color }))
            setColorSide(true)
                    c = ''
            } 
            else if (num == 7){
                c = ''
            setColorSide(false)
            dispatch(changeClass3({ design3: '' }))

            }
                
            else{
                c = ''
            setColorSide(false)
            dispatch(changeClass3({ design3: '' }))

            }
                
            dispatch(changeClass2({ design2: c }))
        }

    }





    return (
        <div className='p-5'>
            <div className='row'>
                <div className='col-12 row mb-3'>
                    <div className='col text-center'><button className='btn btn-danger' style={{ borderRadius: '50%' }} onClick={() => change(1)}>1</button></div>
                    <div className='col text-center'><button className='btn btn-info' style={{ borderRadius: '50%' }} onClick={() => change(2)}>2</button></div>
                    <div className='col text-center'><button className='btn btn-dark' style={{ borderRadius: '50%' }} onClick={() => change(3)}>3</button></div>
                    <div className='col text-center'><button className='btn btn-warning' style={{ borderRadius: '50%' }} onClick={() => change(4)}>4</button></div>

                </div>
                <div className='col row mb-3'>
                    <div className='col text-center'><button className='btn btn-outline-dark' style={{ borderRadius: '50%' }} onClick={() => change(5)}>5</button></div>
                    <div className='col text-center'><button className='btn btn-outline-dark' style={{ borderRadius: '50%' }} onClick={() => change(6)}>6</button></div>
                    <div className='col text-center'><button className='btn btn-outline-dark' style={{ borderRadius: '50%' }} onClick={() => change(7)}>7</button></div>
                    <div className='col text-center'><button className='btn btn-outline-dark' style={{ borderRadius: '50%' }} onClick={() => change(8)}>8</button></div>

                </div>
            </div>
            <h4>Add your details</h4>
            <label>Full name </label>
            <input required ref={nameRef} type="text" defaultValue={userName} className='form-control mb-1' onInput={() => {
                dispatch(changeName({ userName: nameRef.current.value }))
            }} />
            <label>Title </label>
            <input ref={titleRef} type="text" defaultValue={title} className='form-control mb-1' onInput={() => {
                dispatch(changeTitle({ title: titleRef.current.value }))
            }} />
            <input type='file'
                onChange={(event => setUpImage(event.target.files[0]))}>
            </input>
            {/* <button onClick={uploadImage}>upload</button> */}
            <br></br>
            <label>Phone </label>
            <input ref={phoneRef} type="text" defaultValue={phone} className='form-control mb-1' onInput={() => {
                dispatch(changePhone({ phone: phoneRef.current.value }))
            }} />
            <label>Email </label>
            <input ref={emailRef} type="text" defaultValue={email} className='form-control mb-1' onInput={() => {
                dispatch(changeEmail({ email: emailRef.current.value }))
            }} />
            <label>Profile<br></br> Write a few words about yourself </label>
            <textarea ref={profileRef} type="text" defaultValue={profile} className='form-control mb-1' onInput={() => {
                dispatch(changeProfile({ profile: profileRef.current.value }))
            }} />

            <h4 className='mt-3'>Add experiance <span style={{ cursor: "pointer" }} onClick={() => {
                dispatch(addWork({ work: { id: uuid4(), companyName: "", timeStart: "", timeEnd: "", description: "" } }))
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
                dispatch(addSkill({ skill: { id: uuid4(), skill: "" } }))
            }}>+</span></h4>

            {
                skills.map(item => {
                    return <Skills key={item.id} item={item}></Skills>
                })
            }





            <button className='btn btn-outline-dark' onClick={addNewDoc}>save</button>






        </div>
    )
}

export default FormInput



// https://firebasestorage.googleapis.com/v0/b/resume-718a4.appspot.com/o/images%2F11.jpgf267e2d0-9c7b-49af-b332-a8c392dc50ae?alt=media&token=6a40cd4f-044e-4615-bc5a-0c9700532b5b
// https://firebasestorage.googleapis.com/v0/b/resume-718a4.appspot.com/o/images%2F11.jpgc4f7d688-8994-4283-82f1-4f2a935bd10f?alt=media&token=025904cb-eafc-4150-a60f-a3765028f5e1