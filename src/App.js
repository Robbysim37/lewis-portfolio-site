import './App.css';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="flex">
        <SideBar/>
        {/* Fake Sidebar */}
        <div className='w-16'/>
        {/* backgrounds */}
        <div className='w-screen h-screen bg-black flex items-center justify-evenly'>

          {/* messaging window */}
          <div className=' w-[24%] h-[98%] bg-gray-300 rounded-3xl'></div>
          {/* chat window */}
          <div className=' w-[74%] h-[98%] bg-gray-500 rounded-3xl'>

          </div>
        </div>
    </div>
  );
}

export default App;
