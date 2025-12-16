import React from 'react'
import { loginEndpoint } from '../Spotify'

export default function Login() {
  return (
    <div className='w-screen h-screen bg-white flex items-center justify-center overflow-hidden flex-col'>
      <a className='decoration-0' href={loginEndpoint}><button className='w-48 py-3.5 text-center bg-gray-900 rounded-full font-semibold mt-[20%] text-white'>Log in</button></a>
    </div>
  )
}