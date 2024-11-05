import React from 'react'

const login = () => {
  return (
    <div>
      <div>
        <h1>Login</h1>
        <form action="#">
            <div>
                <input type="email" />
                <label>Email</label>
            </div>
            <div>
                <input type="password" />
                <label>Password</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Remeber Me</label>
            </div>
            <span>forget password </span>
            <button>login</button>
        </form>
      </div>
    </div>
  )
}

export default login
import Navbar from '@/components/Navbar'
import React from 'react'


const home = () => {
  return (
    
    <div className='text-red h-[100vh] flex justify-center items-center bg-cover ' style={{"backgroundImage":"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTopOnEXaeNWPfo8X-2R5wRHpnwhie0rpTz0Q&s')"}}>
      <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm bg-opacity-30 relative'>
        <h1 className='text-4xl text-whitefont-bold text-center mb-6'>Login</h1>
        <form action="#">
            <div className='relative my-4'>
                <input type="email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearnance-none dark:focus:border-blue-500 focus: outline-none focus:text-white focus:border-blue-600 peer'/>
                <label className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Email</label>
            </div>
            <div>
                <input type="password"className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearnance-none dark:focus:border-blue-500 focus: outline-none focus:text-white focus:border-blue-600 peer'/>
                <label className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
            </div>
            <div>
                <input type="checkbox" />
                <label>Remeber Me</label>
            </div>
            <span>forget password </span>
            <button>login</button>
        </form>
      </div>
    </div>
  )
}

export default home
