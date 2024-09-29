import React from 'react'
import { RxAvatar } from "react-icons/rx";
import ARRImage from "../assets/profile.jpg"

export default function SentMessages({timeStamp}) {
  return (
    <div className=' w-[74%] h-[98%] bg-gray-800 flex flex-col justify-start rounded-3xl'>

        <div className='w-full h-[7%] bg-gray-700 flex justify-center items-center 
        brt-rounded-3xl text-[2vw] text-gray-300'>Robert Lewis</div>

        <div className='w-full h-[93%] flex flex-col-reverse'>
            <MessagePending/>
            <Message sender="user" timeStamp={timeStamp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Message>
            <Message sender="computer" timeStamp={timeStamp}>test</Message>
        </div>

  </div>
  )
}

function Message({sender,timeStamp,children}) {
    return(
        <>
        <div className={sender === "computer" ? "full-message-wrapper" : "full-message-wrapper-user"}>

            {sender === "computer" && <div className='image-container'><img className='robby-image' src={ARRImage} alt='img' /></div>}
            
            <div className='message-and-timestamp'>

                {sender === "computer" && <div className='timestamp'>Robert Lewis {timeStamp}</div>}
                {sender === "user" && <div className='timestamp-user'>You {timeStamp}</div>}

                <div className='message'>{children}</div>

            </div>
            {sender === "user" && <div className='image-container'><RxAvatar className="user-image"size={48}/></div>}
        </div>
        </>
    )
}

function MessagePending() {
    return(
        <div className='full-message-wrapper'>
            <div className='image-container'><img img className='robby-image' src={ARRImage} alt='img' /></div>
            <div className='message'>
                <span className='dot text-7xl mt-[-30px]'>.</span>
                <span className='dot text-7xl mx-2 mt-[-30px]'>.</span>
                <span className='dot text-7xl mt-[-30px]'>.</span>
            </div>
        </div>
    )
}