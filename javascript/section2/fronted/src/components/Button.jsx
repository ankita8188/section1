import React from 'react'

const Button = ({children, disabled}) => {
  return (
    <button className={'py-2 px-4 bg-blue-500 text-white rounded-md  hover:bg-blue-400 disabled:opacity-50'} disabled={disabled}>{children}</button>
  
  )
}

export default Button