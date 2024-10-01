import React from "react";
import { useState } from "react";
import projectsArr from "../../Data/projects";

const ProjectsPage = () => {

    const [projects] = useState(projectsArr)
    
    const jsxArr = []
    const cardRows = Math.ceil(projectsArr.length / 3)
    let currCardNumber = -1

    const addCards = () => {
        currCardNumber++
        const currProject = projects[currCardNumber]
        console.log(currProject.imgURL)
        return(
            <ProjectCard title={currProject.title} imgURL={currProject.imgURL}>{currProject.description}</ProjectCard>
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
        <div className="bg-gray-800 h-[96%] w-[98%] rounded-3xl flex flex-col overflow-scroll no-scrollbar">
            <div className="w-full h-[7%] brt-3xl bg-gray-700 text-white text-[2vw] 
            flex justify-center items-center">Projects</div>
                {jsxArr}
        </div>
    )
}  

const CardRow = ({children}) => {
    return(
        <div className=" w-full h-fit flex justify-start">{children}</div>
    )
}

const ProjectCard = ({children,imgURL,title}) => {
    return(
        <div className="flex flex-col w-[30%] h-fit mx-[1.66%] mt-8 group">
                <div className=" bg-gray-700 text-gray-300 h-0 overflow-hidden brt-rounded-3xl
                 flex justify-center items-center text-lg group-hover:h-12 
                 group-hover:scale-100 transition-all duration-700">{title}</div>
                <div className="h-[30vh]">
                    <img className="w-full h-full object-fit rounded-3xl 
                    group-hover:rounded-none transition-all duration-200" src={imgURL} alt="test"></img>
                </div>
            <div className=" overflow-hidden max-h-0 bg-gray-700 text-gray-300 brb-rounded-3xl 
             group-hover:max-h-96 group-hover:p-4 transition-all duration-700">
                {children}
            </div>
        </div>
    )
}

export default ProjectsPage