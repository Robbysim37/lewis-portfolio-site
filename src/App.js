import './App.css';
import SideBar from './components/SideBar';
import { RxAvatar } from "react-icons/rx";
import ARRImage from "./assets/profile.jpg"
import { useState } from 'react';

function App() {

  const [date,setDate] = useState(new Date())
  const timeArr = date.toLocaleTimeString().split(/[\s:]+/)
  const timeStamp = timeArr[0] + ":" + timeArr[1] + " " + timeArr[3]

  return (
    <div className="flex">
        <SideBar/>
        {/* Fake Sidebar */}
        <div className='w-16'/>
        {/* backgrounds */}
        <div className='w-screen h-screen bg-black flex items-center justify-evenly'>

          {/* messaging window */}
          <div className=' w-[24%] h-[98%] bg-gray-800 flex flex-col justify-start items-center rounded-3xl'>
            {/* Selections title */}
            <div className='h-[7%] w-full bg-gray-700 text-gray-300 brt-rounded-3xl flex items-center justify-center
            font-bold text-4xl'>Ask me anything</div>
            {/* Message selections */}
            <div className='mt-10 p-2 w-[80%] text-green-500 outline-green-500 
            outline-2 outline rounded-3xl h-fit text-wrap text-center shadow-lg hover:bg-green-500
            hover:text-white hover:cursor-pointer transition-all duration-300'>
              This is a lot of text so I can test what a wrapper on this component might look like</div>
              <div className='mt-10 p-2 w-[80%] text-green-500 outline-green-500 
            outline-2 outline rounded-3xl h-fit text-wrap text-center shadow-lg hover:bg-green-500
            hover:text-white hover:cursor-pointer transition-all duration-300'>
              This is Text</div>
          </div>

          {/* chat window */}
          <div className=' w-[74%] h-[98%] bg-gray-800 flex flex-col-reverse justify-start rounded-3xl'>
            {/* Fake Sent Messages */}
            <div className='w-[75%] mb-10 mr-2 flex flex-col justify-end items-end self-end'>
              {/* Message Time Stamp */}
              <div className='mr-[7%] text-gray-500'>You {timeStamp}</div>
                {/* Text avatar wrapper */}
              <div className='flex'>
                {/* Text */}
              <div className='bg-green-700 text-white max-w-[95%] rounded-3xl p-2 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.</div>
              {/* User Picture */}
              <RxAvatar className='text-green-500 ml-1 w-[5%] h-[40%]'/>
              </div>
            </div>
            {/* Fake Recieved Message */}
            <div className='w-[75%] mb-10 ml-2 flex justify-start items-start self-start'>
              {/* ARR image */}
              <img className='h-10 w-10 rounded-3xl object-cover mr-1' src={ARRImage}></img>
              {/* Fake Text */}
              <div className='bg-green-700 text-white max-w-[75%] self-start mb-10 rounded-3xl p-2 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum.</div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
