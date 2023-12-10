import React ,{useRef} from 'react'

const DateInput = (props) => {
    const inputRef=useRef()

    const onChangeDate=()=>{
        props.setDeadLine(inputRef.current.value)
    }
  return (
    <div>
<input ref={inputRef} defaultValue={"2024-01-01"} type="date"/>
<button onClick={onChangeDate}>change</button>
    </div>
  )
}

export default DateInput