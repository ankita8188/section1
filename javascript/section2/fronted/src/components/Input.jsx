import React from 'react'

const Input = ({id,label,type,placeholder}) => {
  return (
    <div>
        <label htmlFor={id} className='block'>{label}</label>
        <input type={type} placeholder={placeholder} className='border py-1 ' />
    </div>
  )
}

export default Input