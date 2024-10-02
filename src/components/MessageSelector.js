import React, { useState } from 'react'
import questionsAndAnswersArr from '../Data/questionsAndAnswers'

export default function MessageSelector({updateSentMessages}) {

  return (
    <div className=' w-[24%] h-[98vh] bg-gray-800 flex flex-col justify-start items-center rounded-3xl
    '>
      {/* Selections title */}

      <div className='h-[7%] w-full bg-gray-700 text-gray-300 brt-rounded-3xl flex items-center justify-center
      font-bold text-[2vw]'>Ask me anything</div>

      <div className='max-h-[93%] w-full flex flex-col justify-start items-center overflow-scroll
      no-scrollbar::-webkit-scrollbar no-scrollbar'>
        <MessageSelections updateSentMessages={updateSentMessages}/>
      </div>

    </div>
  )
}

function MessageSelections({updateSentMessages}) {

  const [QAs] = useState(questionsAndAnswersArr)

  const newMessage = (e) => {
    const QAid = e.target.id.toString()
    updateSentMessages(QAid)
  }

  return (
    <>
    {QAs.map(currQA => {
      return (
        <div onClick={newMessage} key={Math.random()} id={currQA.id} className='message-prompt'>
        {currQA.prompt.text}
      </div>
      )
    })}
    </>
  )
}