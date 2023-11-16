import React, { useContext, useState } from 'react'

import { BsBuildingCheck } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { FormNewCompany } from './FormNewCompany';
import { GeneralValues } from '../context/GeneralValues';

export const ToNewCompany = () => {
    const {  newCompany, setNewCompany} = useContext(GeneralValues);
    return (
        <>
            <FormNewCompany ></FormNewCompany>
            <Link to={'/companies'} onClick={()=>setNewCompany(true)} className='group/underline shadow-xl flex flex-col items-center justify-start p-2 w-[45%] md:w-[27%] h-[95px] bg-[--azul0] text-white rounded-r'>
                <div className='flex flex-col items-center justify-start gap-1 '>
                    <div>
                        <h2 className='subtitulo'>Registrar compañia</h2>
                        <div className='flex flex-col items-center '>
                            <div className={`mt-[2px] w-0 bg-[--amarillo0] h-[1px] group-hover/underline:w-full transition-all duration-700`}></div>
                        </div>
                    </div>
                    <div className='flex flex-row  justify-center items-center  gap-2'>
                        <div>
                            <BsBuildingCheck size='2rem' className='text-[--amarillo0]'></BsBuildingCheck>
                        </div>

                        <p className='text-start font-extralight text-[11px] md:text-[13px] lg:text-[14px]'>Registrate como empresa y obtén grandes beneficios.</p>
                    </div>
                </div>
            </Link>


        </>
    )
}

