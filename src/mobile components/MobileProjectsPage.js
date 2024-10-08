import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

export default function MobileProjectsPage() {
  return (
    <div className="projects-background">
    <div className="projects-header">
        <HeaderIcon icon={<RxHamburgerMenu size={28}/>}/>
        <div> Projects</div>
        <div></div>
    </div>
</div>
  )
}

const HeaderIcon = ({icon}) => {
    return (
        <div className='ml-6'>
            {icon}
        </div>
    )
}