import React from 'react'
import { GiChatBubble } from "react-icons/gi";
import { GoTrophy } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { CiLinkedin } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

import lewisResume from '../Data/lewisWebResume.pdf'


const openEmail = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Robbysim37@gmail.com")
}
const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/robert-lewis-a224151a1/")
}
const downloadResume = () => {
    let link = document.createElement("a");
    link.download = "Robert Lewis Resume"; // <- name instead of 'name'
    link.href = lewisResume;
    link.click();
    link.remove();
}
const openGithub = () => {
    window.open("https://github.com/Robbysim37")
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
    <>
    <div className={`mobile-sidebar sm:sidebar`}>
        <SideBarIcon action={navigateHome} icon={<GiChatBubble size={28}/>} text="Home" />
        <SideBarIcon action={navigateProjects} icon={<GoTrophy size={28}/>} text="Projects" />
        <SideBarIcon action={openEmail} icon={<HiOutlineMail size={28}/>} text="Email me" />
        <SideBarIcon action={openLinkedIn} icon={<CiLinkedin size={28}/>} text="LinkedIn page" />
        <SideBarIcon action={openGithub} icon={<FaGithub size={28}/>} text="Github" />
        <SideBarIcon action={downloadResume} icon={<GrDocumentText size={24}/>} text="Resume" />
        {/* <SideBarIcon icon={<FaDiscord size={28}/>} text="Discord page" /> */}
    </div>
    <div className='w-16'/>
    </>
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
