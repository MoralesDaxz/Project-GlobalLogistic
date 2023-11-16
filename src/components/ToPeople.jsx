import React from 'react'
import { Link } from 'react-router-dom'
import { TbTruckDelivery } from 'react-icons/tb';
import { IoPeopleCircleOutline } from "react-icons/io5";
export const ToPeople = () => {
  return ( 
    <>
      <Link to={'/people'} className='group/underline shadow-xl flex flex-col items-center justify-start p-2 w-[45%]  h-[95px] md:w-[27%]  bg-white text-black rounded-l'>
        <div className='flex flex-col items-center justify-start gap-1'>
          <div >
            <h2 className='subtitulo'>Servicio personas</h2>
            <div className='flex flex-col items-center '>
              <div className={`mt-[2px] w-0 bg-[--amarillo0] h-[1px] group-hover/underline:w-full transition-all duration-700`}></div>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center  gap-2'>
            <div>
            <IoPeopleCircleOutline size='2rem' className='text-[--amarillo0]'></IoPeopleCircleOutline>
            </div>
            <p className='text-start font-light text-[11px] md:text-[13px] lg:text-[14px]'>Cubrimos cada entrega con rapidez y cuidado. </p>
          </div>
        </div>
      </Link>
    </>
  )
}

