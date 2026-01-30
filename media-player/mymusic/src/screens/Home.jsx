import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Sidebar from '../components/sidebar/SideBar'
import Library from './Library'
import Feed from './Feed'
import Favorites from './Favorites'
import Album from './Album'
import Player from './Player'
import Trending from './Trending'
import SignOut from './SignOut'
import Login from '../auth/Login'
export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <div className='flex w-full h-screen bg-[#1e1e1e]'>
      <Sidebar />
      <div className="grow overflow-y-auto">
        <Routes>
          <Route path='/' element={<Library />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/favorites' element={<Favorites />} />
          {/* <Route path='/album' element={<Album />} /> */}
          <Route path='/player' element={<Album />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/signout' element={<SignOut />} />
        </Routes>
      </div>
    </div>
  );
}