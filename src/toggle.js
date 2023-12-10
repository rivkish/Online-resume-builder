import React,{useState} from 'react'

const Toggle = () => {
    const [toggle,setToggle]=useState(true)
    const show=()=>{
        setToggle(!toggle)    
    }
  return (
    <div>
        <p hidden={toggle}>
            loijnyfbynmjknbgbctfvhvvcxervbhnjbgvfctbbyuj
            hguhg tfbnbfy  v guyhiu yugh huh yg8h
        </p>
        <button onClick={show}>{toggle ? "Show" : "hide"}</button>
    </div>
  )
}

export default Toggle