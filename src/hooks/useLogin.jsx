
import { useState } from "react";
import {auth} from "../firebase/config";
import { useCollection } from '../hooks/useCollection'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {changeId} from "../features/userSlice"


export const useLogin = () => {
  const [error,setError] = useState(null);
  const {docs: users} = useCollection("users")
  let nav=useNavigate()
  const dispatch=useDispatch()

  const login = async(email, password) => {
    console.log(email,password)
    try{
    setError(null);
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res)
    let em;
      if (auth.currentUser) {
        em = auth.currentUser.email;
        console.log(em) 
      }
      
     users.forEach(doc => {
      if(doc.email==em)
      dispatch(changeId({id:doc.id}))
     });
    nav('/main') 
    }
    catch(err){
        console.log("catch")
      setError(err.message);
    }
  }


  return {error, login}
}
