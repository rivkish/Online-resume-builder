import React from 'react'

const VipItem = (props) => {
    const item=props.item
  return (
    <div className='col-md-6'>
      <div className='shadow p-2 overflow-hidden h-100'>
        <img src={item.image} alt={item.name} className="w-25 me-2 float-end" />
        <h2>{item.name}</h2>
        <div>Money: {item.worth.toLocaleString()} M USD</div>
        <div>Company: {item.source}</div>
      </div>
    </div>
  )
}

export default VipItem