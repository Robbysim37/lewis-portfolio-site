import './App.css';
import SideBar from './components/SideBar';
import { useState } from 'react';
import MessageSelector from './components/MessageSelector';
import SentMessages from './components/SentMessages';

function App() {

  const [date] = useState(new Date())
  const timeArr = date.toLocaleTimeString().split(/[\s:]+/)
  const timeStamp = timeArr[0] + ":" + timeArr[1] + " " + timeArr[3]

  return (
    <div className="flex">
        <SideBar/>
        {/* Fake Sidebar */}
        <div className='w-16'/>
        {/* backgrounds */}
        <div className='w-screen h-screen bg-black flex items-center justify-evenly'>
          <SentMessages timeStamp={timeStamp}/>
          <MessageSelector/>
        </div>
    </div>
  );
}

export default App;
