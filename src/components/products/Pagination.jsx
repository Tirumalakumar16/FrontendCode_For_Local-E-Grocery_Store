import React from 'react'

function Pagination({next , prevous ,pageNumber}) {
  return (
    <div className='w-full h-[50px] bg-gray-100 mt-7 p-4 flex items-center justify-center'>
      <div onClick={prevous} className='mr-5 text-2xl cursor-pointer '><i className="fa-solid fa-arrow-left"></i></div>
      <div  className='mr-5 font-bold text-2xl'>{pageNumber}</div>
      <div onClick={next} className='text-2xl cursor-pointer'><i className="fa-solid fa-arrow-right "></i></div>
    </div>
  )
}

export default Pagination
