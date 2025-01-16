import React from 'react'

function Search() {
  return (
    // search bar
    <div className='px-10 mb-5'>
        <form className='flex space-x-2'>
            <input type="text" placeholder='Search...' name="search" id="search" className='w-[80%] rounded-xl outline-none bg-slate-700 text-white font-medium py-2 px-4'/>
            <button className='px-3 font-bold py-1 transition-all duration-300 rounded-full hover:bg-[#ad6af9]'><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div>
  )
}

export default Search