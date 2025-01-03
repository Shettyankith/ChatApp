import React from 'react'

function SendMessage() {
  return (
    <div className='m-2 mb-0 flex item-end justify-center '>
        <input className="rounded-tl-lg rounded-bl-lg px-2 py-3 w-[93%] outline-none bg-slate-700" type="text" name="msg" id="msg" placeholder='Type something..'/>
        <button className='cursor-pointer rounded-tr-xl rounded-br-xl bg-[#ad6af9] p-2 px-4 hover:text-[#ad6af9] hover:bg-white transition-all duration-300'><i className="fa-solid fa-paper-plane"></i></button>
    </div>
  )
}

export default SendMessage