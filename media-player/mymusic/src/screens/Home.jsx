import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Sidebar from '../components/sidebar/SideBar'
import Library from './Library'
import Feed from './Feed'
import Favorites from './Favorites'
import Player from './Player'
import Trending from './Trending'
import SignOut from './SignOut'
import Login from '../auth/Login'
export default function Home() {

  const [token,setToken] = useState("");

  useEffect(()=>{
    const hash = window.location.hash;
    const _token = hash.split("&")[0].split("=")[1];
    window.localStorage.setItem("token",_token);
    setToken(_token);
  }, []);

  return !token ? (
      <Login/>
      ) : (
    <div className='flex w-48 bg-red-400'>
     <Sidebar />
      <Routes>
        <Route path='/' element={<Library/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/player' element={<Player/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/signout' element={<SignOut/>}/>
      </Routes>
    </div>
  );
}
