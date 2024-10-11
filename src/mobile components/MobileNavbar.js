import React from 'react'
import { GiChatBubble } from "react-icons/gi";
import { GoTrophy } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { CiLinkedin } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaArrowLeft } from 'react-icons/fa';


export default function ({sidebarOpen,closeSidebar}) {
  return (
    <div className={`mobile-sidebar ${sidebarOpen ? 'w-[75vw]' : 'w-[0]'}`}>
        <div className='grid grid-cols-3 items-center text-center h-[7%] mt-[2%]'>
            <div></div>
            <div className='text-[3vh]'>Menu</div>
            <div onClick={closeSidebar} className='justify-self-end m-5 '><FaArrowLeft size={28}/></div>
        </div>
        <MenuItem icon={<GiChatBubble className='mobile-sidebar-icon m-6' size={42}/>}>Home</MenuItem>
        <MenuItem icon={<GoTrophy className='mobile-sidebar-icon m-6' size={42}/>}>Projects</MenuItem>
        <MenuItem icon={<HiOutlineMail className='mobile-sidebar-icon m-6' size={42}/>}>Email Me!</MenuItem>
        <MenuItem icon={<CiLinkedin className='mobile-sidebar-icon m-6' size={42}/>}>LinkedIn</MenuItem>
        <MenuItem icon={<FaGithub className='mobile-sidebar-icon m-6' size={42}/>}>Github</MenuItem>
        <MenuItem icon={<GrDocumentText className='mobile-sidebar-icon m-6' size={42}/>}>Resume</MenuItem>
    </div>
  )
}

const MenuItem = ({icon, children}) => {
    return(
        <div className='grid grid-cols-3 items-center text-center'>
            {icon}
            <div>{children}</div>
            <div></div>
        </div>
    )
}