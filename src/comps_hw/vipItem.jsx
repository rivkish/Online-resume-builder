import React from 'react'

const VipItem = (props) => {
    const item=props.item
  return (
    <div>{item.name}</div>
  )
}

export default VipItem