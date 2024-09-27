import React from 'react'

export default function MessageSelector() {
  return (
    <div className=' w-[24%] h-[98%] bg-gray-800 flex flex-col justify-start items-center rounded-3xl'>
      {/* Selections title */}

      <div className='h-[7%] w-full bg-gray-700 text-gray-300 brt-rounded-3xl flex items-center justify-center
      font-bold text-[2vw]'>Ask me anything</div>

      <MessageSelections/>

    </div>
  )
}

function MessageSelections() {
  return (
    // These will loop through a "sent messages" arr
    <>
    <div className='message-selections'>
      This is a lot of text so I can test what a wrapper on this component might look like
    </div>
    <div className='message-selections'>
      This is Text
    </div>
    </>
  )
}