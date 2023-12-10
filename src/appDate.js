import React ,{useState} from 'react'
import DateView from './dateView'
import DateInput from './dateInput'

const AppDate = () => {
    const [deadLine,setDeadLine]=useState('1-1-2024')
  return (
    <div>
        <DateView deadLine={deadLine}></DateView>
        <DateInput setDeadLine={setDeadLine}></DateInput>
    </div>
  )
}

export default AppDate