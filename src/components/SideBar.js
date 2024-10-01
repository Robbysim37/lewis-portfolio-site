import React from 'react'
import { GiChatBubble } from "react-icons/gi";
import { GoTrophy } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { CiLinkedin } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const openEmail = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Robbysim37@gmail.com")
}
const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/robert-lewis-a224151a1/")
}



const SideBar = () => {

    const navigate = useNavigate()

    const navigateHome = () => {
        navigate("/")
    }

    const navigateProjects = () => {
        navigate("/projects")
    }

  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col z-[1000] bg-gray-900 text-white shadow-lg">
        <SideBarIcon action={navigateHome} icon={<GiChatBubble size={28}/>} text="Home" />
        <SideBarIcon action={navigateProjects} icon={<GoTrophy size={28}/>} text="Projects" />
        <SideBarIcon action={openEmail} icon={<HiOutlineMail size={28}/>} text="Email me" />
        <SideBarIcon action={openLinkedIn} icon={<CiLinkedin size={28}/>} text="LinkedIn page" />
        {/* <SideBarIcon icon={<FaDiscord size={28}/>} text="Discord page" /> */}
    </div>
  )
}

const SideBarIcon = ({icon,text,action}) => {
    return(
        <div className='sidebar-icon group' onClick={action}>
            {icon}
            <span className='sidebar-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    )
}

export default SideBar
