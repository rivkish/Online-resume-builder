
import { useState } from "react";
import { useCollection } from '../hooks/useCollection'
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {changeId} from "../features/userSlice"


export const useSignup = () => {
 
  const [error,setError] = useState(null);
  const {docs: users} = useCollection("users")
  let nav=useNavigate()
  const dispatch=useDispatch()


  const signup = async(email, password) => {
    console.log("sign up")
    try{
    setError(null);
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log("user sign in:", res.user);
   
    //   let em;
    //   if (auth.currentUser) {
    //     em = auth.currentUser.email;
    //     console.log(em) 
    //   }
      
    //  users.forEach(doc => {
    //   if(doc.email==em)
    //   dispatch(changeId({id:doc.id}))
    //  });
    
    nav('/main') 
  
    }
    catch(err){
      setError(err.message);
    }
  }


  return {error, signup}
}
