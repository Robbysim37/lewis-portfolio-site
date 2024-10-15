import './App.css';
import SideBar from './components/SideBar';
import { useState } from 'react';
import MessageSelector from './components/MessageSelector';
import SentMessages from './components/SentMessages';
import ProjectsPage from './components/Projects/ProjectsPage';
import questionsAndAnswersArr from './Data/questionsAndAnswers';
import Media from "react-media"
import projectsArr from "./Data/projects";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MobileHomePage from './mobile components/MobileHomePage';
import MobileProjectsPage from './mobile components/MobileProjectsPage';
import MobileNavbar from './mobile components/MobileNavbar';
import MobileMessageSelector from './mobile components/MobileMessageSelector';

function App() {

  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([])
  const [pendingResponse, setPendingResponse] = useState(false)
  const [QAs] = useState(questionsAndAnswersArr)
  const [projects] = useState(projectsArr)
  
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mobileMessageOpen, setMobileMessageOpen] = useState(false)

  const updateSentMessages = (incomingId) => {

    const matchingQA = [...questionsAndAnswersArr.filter(el => {
      return el.id === incomingId ? true : false
    })][0]

    matchingQA.prompt.timeStamp = createTimeStamp()
    setQuestionsAndAnswers(previousMessages =>[matchingQA.prompt, ...previousMessages])

    setPendingResponse(true)

    setTimeout(() => {
      setPendingResponse(false)
      matchingQA.answer.timeStamp = createTimeStamp()
      setQuestionsAndAnswers(previousMessages => [matchingQA.answer, ...previousMessages])
    }, 2000)
  }

  const createTimeStamp = () => {
    const date = new Date()
    const timeArr = date.toLocaleTimeString().split(/[\s:]+/)
    return timeArr[0] + ":" + timeArr[1] + " " + timeArr[3]
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  const openSidebar = () => {
    setSidebarOpen(true)
    setMobileMessageOpen(false)
  }

  const closeMessageSelect = () => {
    setMobileMessageOpen(false)
  }

  const openMessageSelect = () => {
    setMobileMessageOpen(true)
    setSidebarOpen(false)
  }

  return (
    <div className="flex">
      <Media query="(min-width: 640px)">
        {matches => {
          return matches ? 
          // Desktop View / Desktop Router
          <Router>
            <SideBar/>
            {/* background */}
            <div className='w-screen h-screen bg-black flex items-center justify-evenly'>
            <Routes>

              <Route path="" element={<HomePage 
              questionsAndAnswers={questionsAndAnswers} 
              pendingResponse={pendingResponse}
              updateSentMessages={updateSentMessages}
              QAs={QAs}
              />} />

              <Route path="projects" element={<ProjectsPage 
              projects={projects} 
              />} />

            </Routes>
            </div>
          </Router>
          
          : 
          // Mobile View / Mobile Router
          <Router>
            <MobileNavbar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen}/>

            <MobileMessageSelector 
            mobileMessageOpen={mobileMessageOpen} 
            closeMessageSelect={closeMessageSelect}
            updateSentMessages={updateSentMessages}
            QAs={QAs}/>

            <div className='w-screen h-screen bg-black flex items-center justify-evenly'>

            <Routes>

              <Route path="" element={<MobileHomePage
              questionsAndAnswers={questionsAndAnswers} 
              pendingResponse={pendingResponse}
              openMessageSelect={openMessageSelect}
              openSidebar={openSidebar} />}/>

              <Route path="projects" element={<MobileProjectsPage
              openSidebar={openSidebar}
              projects={projects}/>} />

            </Routes>
            </div>
          </Router>
        }}
      </Media>
    </div>
  );
}

function HomePage({questionsAndAnswers,pendingResponse,updateSentMessages,QAs}) {
  return(
  <>
    <SentMessages 
    questionsAndAnswers={questionsAndAnswers}
    pendingResponse={pendingResponse}
    />
    <MessageSelector 
    updateSentMessages={updateSentMessages}
    QAs={QAs}/>
  </>
  )
}

export default App;
