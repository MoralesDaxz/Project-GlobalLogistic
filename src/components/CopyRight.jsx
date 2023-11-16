import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
export const CopyRight = () => {
  const location = useLocation();

  const styleWhite = 'bg-[white]  text-[--blue0] font-[600] opacity-90'
  const styleBlue = 'bg-[--azul0]  text-white font-normal'
  return (
    <>
      <section className={location.pathname == "/help"?styleWhite:styleBlue}>
        <div className='flex justify-center py-2'>
          <h3 className=' '>  Global Logistic © - 2023   </h3>
        </div>
      </section>
    </>
  )
}
