import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <div className='w-full h-screen'>
        <img className='sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/977b26ae-368e-4c67-82e3-31996460e991/NG-en-20230904-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='/'/>
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] rounded h-[600px] mx-auto bg-black/75 text-white'> 
            <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl '>Sign In</h1>
                <form action="" className='w-full flex flex-col py-4'>
                    <input
                    className='p-3 my-2 bg-gray-700 rounded' 
                    type='email' 
                    placeholder='Email'
                    autoComplete='email'/>
                    <input
                    className='p-3 my-2 bg-gray-700 rounded'
                    type='password' 
                    placeholder='Password'
                    autoComplete='current-password'/>
                    <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign IN</button>
                    <div className='flex justify-between items-center text-sm text-gray-600 mt-1'>  
                        <p><input className='mr-2' type="checkbox"/>Remember me</p>
                        <p>Need Help?</p>
                    </div>
                    <p className='py-7'><span className='text-gray-600'>New to to netflix?</span><Link to='/signup'> Sign Up</Link></p>
                </form>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login