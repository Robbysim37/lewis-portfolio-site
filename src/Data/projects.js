import binarySudoku from "../assets/projectImages/binary.png"
import connectFour from "../assets/projectImages/connectFour.png"
import knuckleBones from "../assets/projectImages/knuckleBones.png"
import MGST from "../assets/projectImages/MGST.png"
import boxDefender from "../assets/projectImages/boxDefender.png"

const projectsArr = [
    {
        title: "Box Defender Excel",
        imgURL: boxDefender,
        projectLink: "",
        description: `This is an original game I designed and coded in Excel using VBA.
        It uses custom class modules along with a custom game timer to move enemies at their own speed,
        Click this to download a copy, Once you boot up the game, just use the left and right arrow
        keys to move!`
    },
    {
        title: "Binary Sudoku Solver",
        imgURL: binarySudoku,
        projectLink: "https://binary-sudoku-solver.vercel.app/",
        description: `Probably my favorite project so far, This is a binary sudoku solver I made in React. 
        I designed it mainly for mobile but it also looks decent on desktop. If you are unfamiliar with
        binary sudoku, check out "0h h1." that website does a great job of teaching you the rules!`
    },
    {
        title: "Angular Knucklebones",
        imgURL: knuckleBones,
        projectLink: "https://angular-knucklebones-demo.vercel.app/",
        description: `Knucklebones was originally a dice based minigame in Devolver Digital's 
        "Cult of the Lamb." I re-created this game in Angular. It's pretty bare bones when it comes to design,
        (pun absolutely intended) but it was my first angular project and I wanted to focus on learning 
        rather than perfecting. If I come back to this project, 
        I'm going to ramp up the AI a LOT more, as of right now, all it does is make random moves.`
    },
    {
        title: "Two Player Connect Four",
        imgURL: connectFour,
        projectLink: "https://connect-four-react-zeta.vercel.app/",
        description: `Not much to say about this one, It's a pretty simple two player Connect Four. 
        I made this app while I was learning React, so I spent my time focusing on learning structure and 
        logic as opposed to making it look pretty.`
    },
    {
        title: "Maple Grove Student Tracker",
        imgURL: MGST,
        projectLink: "https://youtu.be/sIBnrap4mIs",
        description: `The Maple Grove Student Tracker is and application I developed (both frontend and
        backend) to help my local high school keep track of student records. Before this application they
        tracked the progress of all students through physical paperwork. Clicking this link will take you
        to a YouTube demonstration on how the frontend works, and how I incorperated Excel into its 
        functionality `
    }
]

export default projectsArr