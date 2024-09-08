import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
      
      <h1 className="text-3xl text-center mt-5">My Home Page</h1>
      <p style={{color:"blue",fontSize:30, textAlign:'center'}}> welcome to home</p>
      <label htmlFor="">some label</label>
      <input type="text" />
      <hr />
      <br />
      <button className='btn'>submit</button>
      <button className='btn'>login button</button>
    </div>
  )
}

export default Home