import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Sidebar from '../components/sidebar/SideBar'
import Library from './Library'
import Feed from './Feed'
import Favorites from './Favorites'
import Player from './Player'
import Trending from './Trending'
import SignOut from './SignOut'
export default function Home() {
  return (
    <>
    <div className='flex w-48 bg-red-400'>
     <Sidebar />
      <Routes>
        <Route path='/' element={<Library/>}/>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/player' element={<Player/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/signout' element={<SignOut/>}/>
      </Routes>
    </div>
    </>
  )
}
