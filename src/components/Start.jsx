import React from 'react'
import { Link } from 'react-router-dom'
import { ContentStartInfo } from './ContentStartInfo';
import { ToPeople } from './ToPeople';
import { ToCompanies } from './ToCompanies';

export const Start = () => {
    return (
        <>
            <section className='bg-[--azul0] flex flex-col items center w-full text-[--blanco0] h-[400px] md:h-[450px] lg:h-[600px] mb-[5rem] md:mb-[7rem]'>
                <article id='bgPrincipal'>
                    <div className='bg-[#0b090a57]'>
                        <div className='w-full h-[400px] md:h-[450px] lg:h-[600px]'></div>
                    </div>
                    <div className='w-full '>
                        <ContentStartInfo home={'home'} />
                    </div>
                </article>
            </section>
        </>
    )
}

