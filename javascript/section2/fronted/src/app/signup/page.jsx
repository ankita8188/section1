import React from 'react'
import Button from '@/components/Button';
import Input from '@/components/input';

const signup = () => {
  return (
    <div >signup
        <Button>MY BTN</Button>
        <Button>HELLO</Button>
        <Button>learn more</Button>
        <Button>read more</Button>
        <Button>submit</Button>
        <Input id='password' label='password' type='password' placeholder='enter your password'/>
    
    
    
        <Input id='email' label='email' type='text' placeholder='enter your email'/>
        <Input id='email' label='email' type='email' placeholder='enter your email'/>
        <Input id='email' label='email' type='email' placeholder='enter your email'/>
        <Input id='email' label='email' type='email' placeholder='enter your email'/>
        <Input id='email' label='email' type='email' placeholder='enter your email'/>
        <Input id='email' label='email' type='email' placeholder='enter your email'/>
        <Input id='email' label='email' type='email' placeholder='enter your email'/>
    </div>
  )
}

export default signup;
