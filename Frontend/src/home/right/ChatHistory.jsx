import React from 'react'
import Messages from './Messages'
import GetSelectedUserMsg from '../../context/GetSelectedUserMsg'

function ChatHistory() {
  const {messages,loading}=GetSelectedUserMsg();
  if(!loading){
    console.log("Conversation details",messages)
  }
  
  return (
    <div className='min-h-[78vh] overflow-y-auto scroller'>
        <Messages/>
    </div>
  )
}

export default ChatHistory