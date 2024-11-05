import Button from '@/components/Button'
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Card title="1" discription="card 10"/>
      <Card title="2"/>
      <Card image={{"backgroundImage":"url('/image/moon.jpg')"}}/>
      <Button>submit</Button>
    </div>
  )
}

export default page
