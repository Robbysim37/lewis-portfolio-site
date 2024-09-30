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
        return(
            <ProjectCard></ProjectCard>
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
        <div className="bg-gray-700 h-[96%] w-[98%] rounded-3xl flex flex-col overflow-scroll no-scrollbar">
            <div className="w-full h-[7%] brt-3xl bg-gray-400">Test</div>
                {jsxArr}
        </div>
    )
}  

const CardRow = ({children}) => {
    return(
        <div className=" w-full h-fit flex justify-start">{children}</div>
    )
}

const ProjectCard = () => {
    return(
        <div className="flex flex-col w-[30%] h-fit mx-[1.66%] mt-8 group">
            <div className="h-[25vh] bg-white"></div>
            <div className="scale-0 h-0 bg-blue-500 group-hover:scale-100 group-hover:h-12 transition-all duration-200">
                test this text out but the length of the text is going to effect this component
                this really sucks man
            </div>
        </div>
    )
}

export default ProjectsPage