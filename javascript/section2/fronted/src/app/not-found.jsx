import React from 'react'

const notFound = () => {
  return (
    <div className='h-screen bg-grey-200 flex justify-center items-center'>
          <div className='text-center space-y-5'>
            <h1 className='text-9xl font-bold'>404</h1>
            <p className='text-3xl font-bold'>page not found</p>
            <button className='bg-black rounded-lg px-4 py-2 text-white'>GO To Homepage</button>
          </div>
    </div>
  )
}

export default notFound;
