import React from 'react'
import {MdFavorite,MdSpaceDashboard} from "react-icons/md"
import {FaGripfire, FaPlay,FaSignOutAlt} from "react-icons/fa"
import {IoLibrary} from "react-icons/io5"
import SideBarButton from './SideBarButton'

export default function SideBar() {
  return (
    <>
    <aside className=''>
      <div className="w-38 px-6 py-4 flex flex-col h-screen bg-violet-800 text-gray-300 justify-between items-center">
        <span className="font-bold text-2xl">MyMusic</span>
      <div className='flex flex-col w-28 h-3/4 justify-center'>
        <SideBarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
        <SideBarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
        <SideBarButton title="Player" to="/player" icon={<FaPlay/>}/>
        <SideBarButton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
        <SideBarButton title="Library" to="/" icon={<IoLibrary/>}/>
      </div>
      <div className='w-full'>
        <SideBarButton title="Sign Out" to="/signout" icon={<FaSignOutAlt/>}/>
      </div>
        </div>
    </aside>
    </>
  )
}
