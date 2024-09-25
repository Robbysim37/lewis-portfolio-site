import React from 'react'
import { GiChatBubble } from "react-icons/gi";
import { RiBook2Line } from "react-icons/ri";
import { GoTrophy } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <SideBarIcon icon={<GiChatBubble size={28}/>} text="Home" />
        <SideBarIcon icon={<RiBook2Line size={28}/>} text="My story" />
        <SideBarIcon icon={<GoTrophy size={28}/>} text="Projects" />
        <SideBarIcon icon={<HiOutlineMail size={28}/>} text="Contact Me" />
    </div>
  )
}

const SideBarIcon = ({icon,text}) => {
    return(
        <div className='sidebar-icon group'>
            {icon}
            <span className='sidebar-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    )
}

export default SideBar
