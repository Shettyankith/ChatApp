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
      {
        loading?(<p>Loading</p>):
          messages.length>0?(
            messages.map((message)=>{
              return <Messages key={message._id} message={message}/>
            })
          ):(<p>start a conversation now</p>)
      }
    </div>
  )
}

export default ChatHistory