import React from 'react'

const Card = ({title,discription,image}) => {
  return (
    <div className='bg-white p-4 rounded-lg border space-y-5 w-60'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p>{discription}</p>
        <div className='flex gap-5'>
            <button className='bg-black px-2 py-1 rounded-md text-white'>Primary button</button>
            <button className='border px-2 py-1 rounded-md'>secondary button</button>
            

        </div>

      
    </div>
  )
}

export default Card
