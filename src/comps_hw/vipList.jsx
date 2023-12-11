import React, { useEffect, useState } from 'react'
import VipItem from './vipItem'
import axios from 'axios'



const VipList = () => {
const [ar,setAr]=useState([])

useEffect(()=>{
  doApi()
},[])

const doApi=async()=>{
  let url = "https://expressrichpepole.onrender.com"
  try{
    let resp=await axios.get(url)
    setAr(resp.data)
  }catch(err){
    console.log(err)
  }
}

  return (
    <div className='container'>
<h2>list vip</h2>
<div className='row g-3'>
{ar.map(item=>{
  return <VipItem key={item.name} item={item}></VipItem>
})}

</div>

    </div>
  )
}

export default VipList