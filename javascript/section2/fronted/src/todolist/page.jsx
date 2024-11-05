'use client';
import React from 'react'

const TodoList = () => {
    let count=0;
  return (
    <div className='bg-grey-300 h-screen pt-10'>
        <h1 className='text-center font-bold text-4xl my-5'>Todo List</h1>
        <div className='container mx-auto shadow rounded-lg bg-white'>
            <h1 className='text-5xl'>
                {count}
            </h1>
            <button onClick={()=>{count++; console.log(count);}}>add count</button>
            <div className='p-5 border-b-2'>
                <input type="text" className='border-2 px-4 py-2 w-full' placeholder='enter a task'  />
            </div>
        </div>
    </div>
  )
}

export default TodoList
