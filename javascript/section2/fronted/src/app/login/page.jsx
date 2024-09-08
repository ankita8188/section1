import React from 'react'
import classes from './login.module.css';
const LOGIN = () => {

  return (
    <div>
        <h1 className='text-4xl text-center font-bold'>login</h1>
        <button className='btn'>submit</button>
        <button className={classes.loginBtn}>login button</button>
    </div>
  )
}
export default LOGIN;
