import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { GiChatBubble } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";
import ARRImage from "../assets/profile.jpg"

export default function MobileHomePage({openSidebar,openMessageSelect,pendingResponse,questionsAndAnswers}) {

  const test = () => {
    console.log("test")
  }

  return (
    <div className='mobile-background'>
      <div className='mobile-header'>

        <div className='ml-6' onClick={openSidebar}>
          <RxHamburgerMenu size={28}/>
        </div>

        <div className='col-start-2 col-end-4 text-[80%]' onClick={test}>Robert Lewis</div>

        <div className='justify-self-end mr-6' onClick={openMessageSelect}>
          <GiChatBubble size={28}/>
        </div>

      </div>

      <div className='w-full max-h-[93%] flex flex-col-reverse overflow-scroll
        no-scrollbar::-webkit-scrollbar no-scrollbar'>

            {pendingResponse && <MobileMessagePending/>}
            
            {questionsAndAnswers.map(currMessage => {
                return(
                    <>
                        <MobileMessage sender={currMessage.messageType} 
                        timeStamp={currMessage.timeStamp}>
                            {currMessage.text}
                        </MobileMessage>
                    </>
                )
            })}

        </div>

    </div>
  )
}

function MobileMessage({sender,timeStamp,children}) {
  return(
      <>
      <div className={sender === "computer" ? "mobile-full-message-wrapper" : "mobile-full-message-wrapper-user"}>

          {sender === "computer" && <div className='mobile-image-container'><img className='mobile-robby-image' src={ARRImage} alt='img' /></div>}
          
          <div className='mobile-message-and-timestamp'>

              {sender === "computer" && <div className='mobile-timestamp'>Robert Lewis {timeStamp}</div>}
              {sender === "user" && <div className='mobile-timestamp-user'>You {timeStamp}</div>}

              <div className='mobile-message'>{children}</div>

          </div>
          {sender === "user" && <div className='mobile-image-container-user'><RxAvatar className="mobile-user-image"size={24}/></div>}
      </div>
      </>
  )
}

function MobileMessagePending() {
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