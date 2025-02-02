import React from 'react'
import Messages from './Messages'
import GetSelectedUserMsg from '../../context/GetSelectedUserMsg'

function ChatHistory() {
  const { messages, loading } = GetSelectedUserMsg();
  if (!loading) {
    console.log("Conversation details", messages)
  }
  return (
    <div className='min-h-[78vh] overflow-y-auto scroller'>
      {
        loading ? (<div className='overflow-y-auto h-full'>
          <div className="chat chat-end my-4 ">
            <div className="chat-bubble px-[20%] animate-pulse bg-slate-700"></div>
          </div>
          <div className="chat chat-start my-4">
            <div className="chat-bubble px-[20%] animate-pulse bg-slate-700"></div>
          </div>
          <div className="chat chat-end my-4 ">
            <div className="chat-bubble px-[20%] animate-pulse bg-slate-700"></div>
          </div>
          <div className="chat chat-start my-4">
            <div className="chat-bubble px-[20%] animate-pulse bg-slate-700"></div>
          </div>
          <div className="chat chat-end my-4 ">
            <div className="chat-bubble px-[20%] animate-pulse bg-slate-700"></div>
          </div>
          <div className="chat chat-start my-4">
            <div className="chat-bubble px-[20%] animate-pulse bg-slate-700"></div>
          </div>
          <div className="chat chat-end my-4 ">
            <div className="chat-bubble px-[20%] animate-pulse bg-slate-700"></div>
          </div>
          <div className="chat chat-start my-4">
            <div className="chat-bubble px-[20%] animate-pulse bg-slate-700"></div>
          </div> <div className="chat chat-end my-4 ">
            <div className="chat-bubble px-[20%] animate-pulse bg-slate-700"></div>
          </div>
          <div className="chat chat-start my-4">
            <div className="chat-bubble px-[20%] animate-pulse bg-slate-700"></div>
          </div>
        </div>) :
          messages?.length > 0 ? (
            messages?.map((message) => {
              return <Messages key={message._id} message={message} />
            })
          ) : (<div className='flex flex-col justify-center items-center h-[80vh]'>
            <img src="./start2.png" alt="image" className='md:w-[80%] w-[95%] lg:w-[40%] h-[70%] object-fit' />
            <p className='font-medium lg:text-2xl text-xl p-2 text-center'>Looks like a quiet space! <span className='text-[#ad6af9] font-bold'>Break</span> the silence with a message!</p>
          </div>)
      }
    </div>
  )
}

export default ChatHistory

