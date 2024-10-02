import React, { useState } from 'react'
import questionsAndAnswersArr from '../Data/questionsAndAnswers'

export default function MessageSelector() {

  return (
    <div className=' w-[24%] h-[98vh] bg-gray-800 flex flex-col justify-start items-center rounded-3xl
    '>
      {/* Selections title */}

      <div className='h-[7.5vh] w-full bg-gray-700 text-gray-300 brt-rounded-3xl flex items-center justify-center
      font-bold text-[2vw]'>Ask me anything</div>

      <div className='h-[97%] w-full flex flex-col justify-start items-center overflow-scroll
      no-scrollbar::-webkit-scrollbar no-scrollbar'>
        <MessageSelections/>
      </div>

    </div>
  )
}

function MessageSelections() {

  const [prompts] = useState(questionsAndAnswersArr)

  return (
    <>
    {prompts.map((currPrompt, i) => {
      return (
        <div className='message-prompt'>
        {currPrompt.prompt.text}
      </div>
      )
    })}
    </>
  )
}