import './App.css';
import SideBar from './components/SideBar';
import { useState } from 'react';
import MessageSelector from './components/MessageSelector';
import SentMessages from './components/SentMessages';
import ProjectsPage from './components/Projects/ProjectsPage';
import questionsAndAnswersArr from './Data/questionsAndAnswers';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [questionsAndAnswers, setQuestionsAndAnswers] = useState(questionsAndAnswersArr)

  console.log(questionsAndAnswers)

  const [date] = useState(new Date())
  const timeArr = date.toLocaleTimeString().split(/[\s:]+/)
  const timeStamp = timeArr[0] + ":" + timeArr[1] + " " + timeArr[3]

  return (
    <div className="flex">
      <Router>
          <SideBar/>
          {/* Fake Sidebar */}
          <div className='w-16'/>
          {/* background */}
          <div className='w-screen h-screen bg-black flex items-center justify-evenly'>
          <Routes>
            <Route path="" element={<HomePage questionsAndAnswers={questionsAndAnswers} timeStamp={timeStamp}/>} />
            <Route path="projects" element={<ProjectsPage/>} />
          </Routes>
          </div>
        </Router>
    </div>
  );
}

function HomePage({timeStamp, questionsAndAnswers}) {
  return(
  <>
    <SentMessages questionsAndAnswers={questionsAndAnswers} timeStamp={timeStamp}/>
    <MessageSelector/>
  </>
  )
}

export default App;
