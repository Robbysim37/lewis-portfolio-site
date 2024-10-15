import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function MobileMessageSelector({updateSentMessages,mobileMessageOpen,closeMessageSelect,QAs}) {
  return (
    <div className='fixed h-screen w-screen flex justify-end pointer-events-none'>
        <div className={`mobile-message-selector ${mobileMessageOpen ? "w-[75vw]" : "w-0"}`}>
        <div className=' grid grid-cols-8 items-center text-center h-[7%] mt-[4%]'>
            <div className='ml-6 w-fit' onClick={closeMessageSelect}><FaArrowRight size={28}/></div>
            <div className='col-start-2 col-end-9 text-[3vh] pointer-events-none'>Quick Questions</div>
            <div></div>
        </div>
        <div className='max-h-[92%] w-full overflow-scroll flex flex-col items-center no-scrollbar'>
          <MobileMessagePrompts closeMessageSelect={closeMessageSelect} 
          updateSentMessages={updateSentMessages} 
          QAs={QAs}/>
        </div>
        </div>
    </div>
  )
}

const MobileMessagePrompts = ({closeMessageSelect, updateSentMessages,QAs}) => {

  const newMessage = (e) => {
    closeMessageSelect()
    const QAid = e.target.id.toString()
    updateSentMessages(QAid)
  }

  return(
    <>
    {QAs.map(currQA => {
      return(
        <div onClick={newMessage} key={Math.random()} id={currQA.id} className='message-prompt'>
        {currQA.prompt.text}
      </div>
      )
    })}
    </>
  )
}