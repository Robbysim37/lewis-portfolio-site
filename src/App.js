import './App.css';
import SideBar from './components/SideBar';
import { useState } from 'react';
import MessageSelector from './components/MessageSelector';
import SentMessages from './components/SentMessages';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import ProjectsPage from './components/Projects/ProjectsPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [date] = useState(new Date())
  const timeArr = date.toLocaleTimeString().split(/[\s:]+/)
  const timeStamp = timeArr[0] + ":" + timeArr[1] + " " + timeArr[3]

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <HomePage timeStamp={timeStamp} />
  //   },
  //   {
  //     path: "projects",
  //     element: <ProjectsPage/>
  //   },
  //   {
  //     path: "contact",
  //     element: <ContactMePage/>
  //   }
  // ])

  // <RouterProvider router={router}></RouterProvider>

  return (
    <div className="flex">
      <Router>
          <SideBar/>
          {/* Fake Sidebar */}
          <div className='w-16'/>
          {/* background */}
          <div className='w-screen h-screen bg-black flex items-center justify-evenly'>
          <Routes>
            <Route path="" element={<HomePage timeStamp={timeStamp}/>} />
            <Route path="projects" element={<ProjectsPage/>} />
          </Routes>
          </div>
        </Router>
    </div>
  );
}

function HomePage({timeStamp}) {
  return(
  <>
    <SentMessages timeStamp={timeStamp}/>
    <MessageSelector/>
  </>
  )
}

export default App;
