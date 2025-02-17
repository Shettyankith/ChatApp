import React from 'react'

function ImagePreview({ImageUrl,Close}) {
  return (
    <div className=' bg-slate-700 fixed top-[25%] left-[25%] p-10 text-black w-1/2 h-1/2 z-50 flex flex-col items-start justify-center rounded-md'>
        <i class="fa-solid fa-circle-xmark text-white text-xl ml-auto mb-auto hover:text-[#ad6af9] transition-all duration-500" onClick={Close}></i>
        <img src={ImageUrl} alt="Profile Pic" className=' w-fit h-full object-fit m-auto'/>
    </div>
  )
}

export default ImagePreview