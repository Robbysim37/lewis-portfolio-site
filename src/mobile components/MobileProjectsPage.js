import React from 'react'
import { useRef } from "react"
import { RxHamburgerMenu } from "react-icons/rx";
import boxDefenderDownload from "../Data/boxDefender.xlsm"

export default function MobileProjectsPage({projects,openSidebar}) {
  return (
    <div className="mobile-background">

    <div className="mobile-header">
        <div onClick={openSidebar} >
            <HeaderIcon icon={<RxHamburgerMenu size={28}/>}/> 
        </div>
        <div className='col-start-2 col-end-4 text-[80%]'>Projects</div>
        <div></div>
    </div>

    <div className='text-white text-2xl w-full text-center'>Hold finger to see details</div>
    <div className='text-white text-1xl w-full text-center'>*Not all projects mobile friendly</div>

    {projects.map(currProject => {
        return (
            <MobileProjectCard 
            projectURL={currProject.projectLink} 
            title={currProject.title} 
            imgURL={currProject.imgURL}>
                {currProject.description}
            </MobileProjectCard>
        )
    })}

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

const MobileProjectCard = ({children,imgURL,title,projectURL}) => {
    const divRef = useRef(null)

    const handleAnimationEnd = () => {
      if (divRef.current) {
        divRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  
    const DownloadBoxDefender = () => {
      let link = document.createElement("a");
      link.download = "BoxDefender"; // <- name instead of 'name'
      link.href = boxDefenderDownload;
      link.click();
      link.remove();
    }
  
    const openProject = () => {
      if(projectURL === "BoxDefender"){
          DownloadBoxDefender()
      }else{
          window.open(projectURL)
      }
    }
  
      return(
          <div onClick={openProject} ref={divRef} className="flex flex-col justify-center items-center h-fit mx-[1.66%] mt-8 group">
                  <div className="mobile-project-card-title">{title}</div>
                  <div className="h-[30vh] w-[90%]">
                      <img  className="w-full h-full object-fit rounded-3xl grayscale
                      group-hover:rounded-none group-hover:grayscale-0 transition-all duration-200" src={imgURL} alt="test"></img>
                  </div>
                  
              <div onTransitionEnd={handleAnimationEnd} className=" overflow-hidden max-h-0 bg-gray-700 text-gray-300 brb-rounded-3xl 
               group-hover:max-h-96 group-hover:p-4 w-[90%] transition-all duration-700">
                  {children}
              </div>
          </div>
      )
}