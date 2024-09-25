import './App.css';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="flex">
        <SideBar/>
        {/* Fake Sidebar */}
        <div className='w-16'/>
        {/* backgrounds */}
        <div className='w-screen h-screen bg-gray-700 flex align-middle justify-evenly'>

          {/* messaging window */}
          <div className=' w-3/12 h-screen bg-gray-300' ></div>
          {/* chat window */}
          <div className=' w-9/12 h-screen bg-gray-500'>

          </div>
        </div>
    </div>
  );
}

export default App;
