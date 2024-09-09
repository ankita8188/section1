'use client'
import React from 'react'

const EventHandling = () => {
    const previewimage=(e)=>{
        const file =e.target.files[0];
        const reader = new FileReader();
        reader.onload=(output)=>{
            const img =new Image();
        img.src=output.target.result   
        document.body.appendChild(img)
     }
        reader.readAsDataURL(file)
    }
  return (
    <div className='max-w-2xl mx-auto'
    onMouseMove={(e)=>{console.log(e.clientX,e.clientY, e.movementX, e.movementY) }}>
        <h1 className='text-3xl text-center font-bold mt-5'>Event Handling</h1>
        <button className='bg-black p-3 rounded mt-4 text-white'
        onClick={()=>{alert('button waas clicked')}}>click me
        </button>
        <input className='w-full border py-1 px-3 rounded mt-4 ' onChange={(e)=>{console.log(e.target.value);}} type="text" />
        <input className='mt-5 ' onChange={(e)=>{document.body.style.background=e.target.value;}} type="color" />
        <input className='block mt-5' type="file" onChange={(e)=>{console.log(e.target.files);}} multiple />
        <input className='block mt-5' type="file" onChange={previewimage}/>
        <input  className="py-1 px-3 rounded mt-5 bg-grey-200 " onKeyDown={(e)=>{console.log(e.code)}} type="text" />
    </div>
  )
}

export default EventHandling;