import React from 'react'
import { Link } from 'react-router-dom'
import { BsBuildings } from 'react-icons/bs';



export const ToCompanies = () => {
    return (
        <>
            <Link to={'/companies'} className='group/underline shadow-xl flex flex-col items-center justify-start p-2 w-[45%]  h-[95px] md:w-[27%]  bg-[--azul0] text-white rounded-r'>
                <div className='flex flex-col items-center justify-start gap-1 '>
                    <div>
                        <h2 className='subtitulo'>Servicio Empresas</h2>
                        <div className='flex flex-col items-center '>
                            <div className={`mt-[2px] w-0 bg-[--amarillo0] h-[1px] group-hover/underline:w-full transition-all duration-700`}></div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <div >
                            <BsBuildings size='1.8rem' className='text-[--amarillo0]'></BsBuildings>
                        </div>
                        <p className='text-start font-extralight text-[11px] md:text-[13px] lg:text-[14px]'>Nos adaptamos a sus necesidades, ofreciendo un servicio con garantía.</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

