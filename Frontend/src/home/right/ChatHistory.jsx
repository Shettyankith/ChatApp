import React, { useEffect, useRef } from 'react'
import Messages from './Messages'
import GetSelectedUserMsg from '../../context/GetSelectedUserMsg'
import useGetSocketMessages from '../../context/GetSocketMessage';

function ChatHistory() {
  const { messages, loading } = GetSelectedUserMsg();
  if (!loading) {
    console.log("Conversation details", messages);
  }
  // calling to fetch real time messages
  useGetSocketMessages(); 
  const chatContainerRef = useRef(null); 

  // ✅ Scroll to the bottom when messages update
  useEffect(() => {
    if (chatContainerRef.current) {
      setTimeout(() => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }, 100); // ✅ Small delay to allow DOM to update
    }
  }, [messages]);
  return (
    <div className=' flex flex-col scroller overflow-y-auto lg:min-h-[82vh] max-h-[75vh] ' ref={chatContainerRef} >
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
            messages?.map((message,index) =>(
              <div   key={index}>
                 <Messages message={message} />
              </div>
            ))
          ) : 
          (<div className='flex flex-col justify-center items-center h-[80vh]'>
            <img src="./start2.png" alt="image" className='md:w-[80%] w-[95%] lg:w-[40%] h-[70%] object-fit' />
            <p className='font-medium lg:text-2xl text-xl p-2 text-center italic'>Looks like a quiet space! <span className='text-[#ad6af9] font-bold'>Break</span> the silence with a message!</p>
          </div>)
      }
    </div>
  )
}

export default ChatHistory

