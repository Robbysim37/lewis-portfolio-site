import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { GiChatBubble } from "react-icons/gi";

export default function MobileHomePage({openSidebar,openMessageSelect}) {

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
    </div>
  )
}
