import React from 'react'

const Notfound = () => {
  return (
    <div className='flex items-center justify-center'>
        <div>
            <img className='block w-full  mx=auto' src="error.webp" alt="Not found" />
            <h1 className='text-9xl font-bold text-center'>404</h1>
            <h4 className='text-3xl text-center'>page not found</h4>
            <a href="/" className='py-2 px-4 rounded-lg bg-grey-200 border mt-4 text-center block font-bold'>back to home</a>
        </div>
    </div>
  )
}

export default Notfound;