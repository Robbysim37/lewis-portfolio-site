import React, { useRef } from "react";
import boxDefenderDownload from "../../Data/boxDefender.xlsm"
import projectsArr from "../../Data/projects";

const ProjectsPage = ({projects}) => {
    
    const jsxArr = []
    const cardRows = Math.ceil(projectsArr.length / 3)
    let currCardNumber = -1

    const addCards = () => {
        currCardNumber++
        const currProject = projects[currCardNumber]
        console.log(currProject.imgURL)
        return(
            <ProjectCard key={Math.random()} projectURL={currProject.projectLink} title={currProject.title} imgURL={currProject.imgURL}>{currProject.description}</ProjectCard>
        )
    }

    for(let i = 0; i < cardRows; i++){
        jsxArr.push(<CardRow>
            {projects[currCardNumber + 1] && addCards()}
            {projects[currCardNumber + 1] && addCards()}
            {projects[currCardNumber + 1] && addCards()}
        </CardRow>)
    }

    return(
        <div className="projects-background">
            <div className="projects-header">Projects</div>
                {jsxArr}
        </div>
    )
}  

const CardRow = ({children}) => {
    return(
        <div className=" w-full h-fit flex justify-start">{children}</div>
    )
}

const ProjectCard = ({children,imgURL,title,projectURL}) => {
    
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
        <div onClick={openProject} ref={divRef} className="flex flex-col w-[30%] h-fit mx-[1.66%] mt-8 group">
                <div  className=" bg-gray-700 text-gray-300 h-0 overflow-hidden brt-rounded-3xl
                 flex justify-center items-center text-lg group-hover:h-12 
                 group-hover:scale-100 transition-all duration-700">{title}</div>
                <div  className="h-[30vh]">
                    <img  className="w-full h-full object-fit rounded-3xl grayscale
                    group-hover:rounded-none group-hover:grayscale-0 transition-all duration-200" src={imgURL} alt="test"></img>
                </div>
                
            <div onTransitionEnd={handleAnimationEnd} className=" overflow-hidden max-h-0 bg-gray-700 text-gray-300 brb-rounded-3xl 
             group-hover:max-h-96 group-hover:p-4 transition-all duration-700">
                {children}
            </div>
        </div>
    )
}

export default ProjectsPage