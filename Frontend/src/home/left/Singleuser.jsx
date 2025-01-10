import React from 'react'

function Singleuser({user}) {
  return (
    <div className="pl-10 flex space-x-4 my-4 hover:bg-slate-600 transition-all duration-300 px-2 py-4">
        <div className="avatar online w-16">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="align-self-center">
          <p className="font-medium text-xl">{user.username}</p>
          <p>{user.email}</p>
        </div>
    </div>
  )
}

export default Singleuser