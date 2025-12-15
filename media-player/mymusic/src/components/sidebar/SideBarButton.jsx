import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconContext } from "react-icons";
import "./sideBarButton.css";

export default function SideBarButton(props) {
  const location = useLocation();

  const isActive = location.pathname === props.to;

  const btnClass = isActive ? "flex flex-col text-white scale-110 transition-all ease-in rounded-2xl items-center justify-center text-xl my-2 h-20 w-full bg-violet-400" : "flex flex-col items-center justify-center text-xl my-2 h-20 w-full hover:text-white";
  // const btnClass = isActive ? "btn-body active" : "btn-body";
  return (
    <Link to={props.to}>
        <div className={btnClass}>
        <IconContext.Provider value={{size:"28px"}}>
            {props.icon}
            <p className=''>{props.title}</p>
        </IconContext.Provider >
        </div>
    </Link>
  );
}
