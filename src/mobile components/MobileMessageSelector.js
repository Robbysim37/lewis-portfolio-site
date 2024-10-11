import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function MobileMessageSelector({mobileMessageOpen}) {
  return (
    <div className='fixed h-screen w-screen flex justify-end pointer-events-none'>
        <div className={`mobile-message-selector ${mobileMessageOpen ? "w-[75vw]" : "w-0"}`}>
        <div className='grid grid-cols-8 items-center text-center h-[7%] mt-[2%]'>
            <div className='ml-6'><FaArrowRight size={28}/></div>
            <div className='col-start-2 col-end-9 text-[3vh]'>Quick Questions</div>
            <div></div>
        </div>
        </div>
    </div>
  )
}
