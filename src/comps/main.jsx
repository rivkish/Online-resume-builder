import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase/config'
import { collection, addDoc, getDocs, doc } from 'firebase/firestore'
import { changeEmail, changeId, changeName, changePhone, addResume, allResume } from "../features/userSlice"
import { allResume1 } from "../features/resumeSlice"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getFirestore, getDoc } from 'firebase/firestore';
import { useCollection } from '../hooks/useCollection'



const Main = () => {
  const { name, phone, email, resumes, id } = useSelector(myStore => myStore.userSlice)
  const { userName } = useSelector(myStore => myStore.resumeSlice)
  const { docs: users } = useCollection("users")
  const dispatch = useDispatch()
  let nav = useNavigate()


  useEffect(() => {
    const x = () => {
      dispatch(allResume({ resume: [] }))
      getUserId()
      // getUser()
    }
    x()
  }, [])

  const getUserId = async () => {
    let em;
    if (auth.currentUser) {
      em = auth.currentUser.email;
      console.log(em)
      const ref = collection(db, 'users')
      await getDocs(ref)
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.data().email == em) {
              console.log("find user")
              dispatch(changeId({ id: doc.id }))
          getUser(doc.data(),doc.id)    
            }
          })
        })
        .catch(err => console.log(err.massege))
    }
  }


  const getUser = async (user,id) => {
    // console.log(id)
    // if (auth.currentUser)
    //   console.log(auth.currentUser.email)
    // dispatch(allResume({ resume: [] }))
    // users.forEach(doc => {
    //   if (doc.id == id) {
    //     console.log("find")
        dispatch(changeEmail({ email: user.email }))
        dispatch(changeName({ name: user.name }))
        dispatch(changePhone({ phone: user.phone }))
        user.resumes.forEach(async (item) => {
          getResume(item)
        })
        return;
      // }

    // });

    // let em;
    // if (auth.currentUser) {
    //   em = auth.currentUser.email;
    //   console.log(em)
    // }

    // const ref = collection(db, 'users')
    // await getDocs(ref)
    //   .then((snapshot) => {
    //     let res = []
    //     snapshot.docs.forEach((doc) => {
    //       if (em == doc.data().email)
    //         res.push({ ...doc.data(), id: doc.id })
    //     })
    //     dispatch(changeEmail({ email: res[0].email }))
    //     dispatch(changeName({ name: res[0].name }))
    //     dispatch(changePhone({ phone: res[0].phone }))
    //     dispatch(changeId({ id: res[0].id }))

    //     res[0].resumes.forEach(async (item) => {
    //       getResume(item)
    //     })
    //   })
    //   .catch(err => console.log(err.massege))
  }

  const getResume = async (id1) => {
    console.log("resune")
    const ref = collection(db, 'resumes')
    await getDocs(ref)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.id == id1) {
            console.log("find resume")
            dispatch(addResume({ resume: { ...doc.data(), id: doc.id } }))
          }
        })
      })
      .catch(err => console.log(err.massege))
  }





  return (
    <div className='text-center mt-5'>
      <h2>Your resumes</h2>
      <button onClick={getUser}>show</button>

      <div className='card shadow w-25 m-auto mt-3 p-2' style={{ cursor: 'pointer' }} onClick={() => {
        nav('/resume')
      }}>
        <h6><strong>Add new</strong></h6>

      </div>
      {
        resumes.map(item => {
          return <div key={item.id} className='card shadow w-25 m-auto mt-3 p-2' style={{ cursor: 'pointer' }} onClick={() => {
            nav('/resume')
            dispatch(allResume1({ resume: item }))

          }}>
            <h6><strong>{item.userName}</strong></h6>
            <p>{item.title}</p>
          </div>
        })
      }

    </div>
  )
}

export default Main