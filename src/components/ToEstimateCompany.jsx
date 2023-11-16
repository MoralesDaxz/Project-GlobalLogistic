import React, { useState } from 'react'
import { HiOutlineDocumentCheck } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { FormEstimate } from './FormEstimate'
import { HiDocumentCheck } from "react-icons/hi2";
export const ToEstimateCompany = () => {
    const [showEstimateForm, setEstimateForm] = useState(false) 
    return (
        <>
            <div onClick={()=>setEstimateForm(true)} className='cursor-pointer group/underline shadow-xl flex flex-col items-center justify-between p-3 w-[45%] md:w-[27%] h-[95px] bg-white text-black rounded-l'>
                <div className='flex flex-col items-center justify-start gap-1'>
                    <div >
                        <h2 className='subtitulo'>¿Presupuesto?</h2>
                        <div className='flex flex-col items-center '>
                            <div className={`mt-[2px] w-0 bg-[--amarillo0] h-[1px] group-hover/underline:w-full transition-all duration-700`}></div>
                        </div>
                    </div>
                    <div  className='flex flex-row justify-center items-center  gap-2'>
                        <div>
                        <HiDocumentCheck size='2rem' className='text-[--amarillo0]'></HiDocumentCheck>
                        </div>
                        <p className='text-start font-light text-[11px] md:text-[13px] lg:text-[14px]'>Estime el costo como empresa registrada.</p>
                    </div>
                </div>
            </div>
            {showEstimateForm && <FormEstimate showForm={setEstimateForm}></FormEstimate>}
        </>
    )
}
