import React from 'react'

export const ProgressUnderline = ({group}) => {
  return (
    <div className='flex flex-col items-center '>
      <div className={` w-0 bg-[--amarillo0] h-[1px] group-hover/${group}:w-full transition-all duration-700`}></div>
    </div>
  )
}

