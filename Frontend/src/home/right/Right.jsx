import React from 'react'
import ChatUser from './ChatUser'
import ChatHistory from './ChatHistory'
import SendMessage from './SendMessage'

function Right() {
  return (
    <div className='bg-[#1D1923] w-[70%] text-white'>
      <ChatUser/>
      <ChatHistory/>
      <SendMessage/>
    </div>
  )
}

export default Right