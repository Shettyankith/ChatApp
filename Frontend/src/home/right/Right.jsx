import React from 'react'
import ChatUser from './ChatUser'
import ChatHistory from './ChatHistory'
import SendMessage from './SendMessage'
import chatUser from '../../Zustand/index.js'

function Right() {
  const {selectedUser}=chatUser();
  return (
    <div className='bg-[#1D1923] w-[70%] text-white '>
      {selectedUser?(
        <><ChatUser/>
        <ChatHistory/>
        <SendMessage/></>
      ):(
        <div className='h-full flex flex-col object-cover justify-center items-center'>
          <img src="./second.png" alt="image" className='w-[40%] h-[50%]'/>
          <p className='font-medium text-lg md:text-2xl italic text-center'>Every great connection begins with a simple <span className='text-[#ad6af9] font-bold'>hello</span>. Send your message now!</p>
        </div>
      )}
      
    </div>
  )
}

export default Right