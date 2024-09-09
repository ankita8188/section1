import React from 'react'
import Button from '@/components/Button';
import Input from '@/components/input';

const signup = () => {
  return (
    <div className='border-2px'>signup
      
      <div>
        <Input id='name' label='Name' type='text' placeholder='enter your Name'/>
        <Input id='email' label='email' type='text' placeholder='enter your email'/>
        <Input id='phone' label='phone' type='phone' placeholder='enter your email'/>
        <Input id='password' label='password' type='password' placeholder='enter your email'/>
        <Input id='password' label=' confirm password' type='password' placeholder='Confirm'/>
        <Button>submit</Button>
    </div>
    </div>
  )
}

export default signup;
