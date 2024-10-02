import React from 'react'
import { RxAvatar } from "react-icons/rx";
import ARRImage from "../assets/profile.jpg"

export default function SentMessages({questionsAndAnswers,pendingResponse}) {
  return (
    <div className=' w-[74%] h-[98vh] bg-gray-800 flex flex-col justify-between rounded-3xl'>

        <div className='w-full h-[7.5vh] bg-gray-700 flex justify-center items-center 
        brt-rounded-3xl text-[2vw] text-gray-300'>Robert Lewis</div>

        <div className='w-full h-fit flex flex-col overflow-scroll
        no-scrollbar::-webkit-scrollbar no-scrollbar'>
            
            {questionsAndAnswers.map(currMessage => {
                return(
                    <>
                        <Message sender={currMessage.messageType} 
                        timeStamp={currMessage.timeStamp}>
                            {currMessage.text}
                        </Message>
                    </>
                )
            })}

            {pendingResponse && <MessagePending/>}

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