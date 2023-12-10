import React ,{useState,useEffect} from 'react'

const DateView = (props) => {
    const [days,setDays]=useState(12)

useEffect(()=>{
    calcDays(props.deadLine)
},[props.deadLine])
    

    const calcDays=(_neaDate)=>{
        let time=Date.parse(_neaDate)-Date.now();
        let newDate =Math.ceil(time/(1000*60*60*24))
        setDays(newDate)
    }

    return (

        <div>
            <h2>CountDown to: {props.deadLine}</h2>
            <h3>Days left: {days}</h3>
        </div>
    )
}

export default DateView