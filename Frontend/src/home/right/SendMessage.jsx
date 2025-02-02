import React, { useState } from 'react'
import SendMsg from '../../context/SendMsg';

function SendMessage() {
  const { sendMessage, loading }=SendMsg();
  const [message,setmessage]=useState("");
  const handleSubmit=async(e)=>{
    e.preventDefault();
    sendMessage(message);
    // empty the input field
    setmessage("");
  }
  return (
    <form className='m-2 mb-0 flex item-end justify-center' onSubmit={handleSubmit}>
        <input className="rounded-tl-lg rounded-bl-lg px-2 py-3 w-[93%] outline-none bg-slate-700" type="text" value={message} onChange={(e)=>setmessage(e.target.value)} name="msg" id="msg" placeholder='Type something..'/>
        <button className='cursor-pointer rounded-tr-xl rounded-br-xl bg-[#ad6af9] p-2 px-4 hover:text-[#ad6af9] hover:bg-[transparent] hover:border-[#ad6af9] hover:border-[2px] transition-all duration-300'><i className="fa-solid fa-paper-plane"></i></button>
    </form>
  )
}

export default SendMessage