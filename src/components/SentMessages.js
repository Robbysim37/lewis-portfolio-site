import React from 'react'
import { RxAvatar } from "react-icons/rx";
import ARRImage from "../assets/profile.jpg"

export default function SentMessages({timeStamp}) {
  return (
    <div className=' w-[74%] h-[98%] bg-gray-800 flex flex-col justify-start rounded-3xl'>

        <div className='w-full h-[7%] bg-gray-700 flex justify-center items-center 
        brt-rounded-3xl text-[2vw] text-gray-300'>Robert Lewis</div>

        <div className='w-full h-[93%] flex flex-col-reverse'>
            <Message sender="user" timeStamp={timeStamp}/>
            <Message sender="computer" timeStamp={timeStamp}/>
        </div>

  </div>
  )
}

function Message({sender,timeStamp}) {
    return(
        <div className=' flex flex-col'>
            {sender === "user" && 
                <div className='w-[75%] bg-white mb-10 mr-2 flex flex-col justify-end items-end self-end'>
                {/* Message Time Stamp */}
                    <div className='mr-[7%] text-gray-500'>You {timeStamp}</div>
                  {/* Text avatar wrapper */}
                    <div className='flex'>
                        {/* Text */}
                        <div className='bg-green-700 text-white max-w-[95%] rounded-3xl p-2 text-start'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                            mollit anim id est laborum.
                        </div>
                        {/* User Picture */}
                        <RxAvatar className='text-green-500 ml-1 w-[5%] h-[40%]'/>
                    </div>
                </div>}
              {sender === "computer" && 
                <div className='w-[75%] bg-white mb-5 ml-2 flex flex-col justify-start items-start self-start'>
                    <div className="ml-[7%] text-gray-500"> Robert Lewis {timeStamp}</div>
                    <div className='flex'>
                        {/* ARR image */}
                        <div className='h-14 w-14 overflow-hidden'>
                            <img className='h-full w-full rounded-[100%] object-cover mr-1' alt="img" src={ARRImage}></img>
                        </div>
                        {/* Fake Text */}
                        <div className='bg-green-700 text-white w-full self-start rounded-3xl p-2 text-start'>
                            this is a test
                        </div>
                    </div>
              </div>}
        </div>
    )
}