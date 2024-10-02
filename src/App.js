import './App.css';
import SideBar from './components/SideBar';
import { useState } from 'react';
import MessageSelector from './components/MessageSelector';
import SentMessages from './components/SentMessages';
import ProjectsPage from './components/Projects/ProjectsPage';
import questionsAndAnswersArr from './Data/questionsAndAnswers';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([])
  const [pendingResponse, setPendingResponse] = useState(false)

  const updateSentMessages = (incomingId) => {

    const matchingQA = [...questionsAndAnswersArr.filter(el => {
      return el.id === incomingId ? true : false
    })][0]

    matchingQA.prompt.timeStamp = createTimeStamp()
    setQuestionsAndAnswers(previousMessages =>[...previousMessages,matchingQA.prompt])

    setPendingResponse(true)

    setTimeout(() => {
      setPendingResponse(false)
      matchingQA.answer.timeStamp = createTimeStamp()
      setQuestionsAndAnswers(previousMessages => [...previousMessages, matchingQA.answer])
    }, 2000)
  }

  const createTimeStamp = () => {
    const date = new Date()
    const timeArr = date.toLocaleTimeString().split(/[\s:]+/)
    return timeArr[0] + ":" + timeArr[1] + " " + timeArr[3]
  }



  return (
    <div className="flex">
      <Router>
          <SideBar/>
          {/* Fake Sidebar */}
          <div className='w-16'/>
          {/* background */}
          <div className='w-screen h-screen bg-black flex items-center justify-evenly'>
          <Routes>
            <Route path="" element={<HomePage 
            questionsAndAnswers={questionsAndAnswers} 
            pendingResponse={pendingResponse}
            updateSentMessages={updateSentMessages}
            />} />
            <Route path="projects" element={<ProjectsPage/>} />
          </Routes>
          </div>
        </Router>
    </div>
  );
}

function HomePage({questionsAndAnswers,pendingResponse,updateSentMessages}) {
  return(
  <>
    <SentMessages 
    questionsAndAnswers={questionsAndAnswers}
    pendingResponse={pendingResponse}
    />
    <MessageSelector 
    updateSentMessages={updateSentMessages}/>
  </>
  )
}

export default App;
