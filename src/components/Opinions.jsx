import React from 'react'
import { CarouselClients } from './CarouselClients'
import { CarouselOpinions } from './CarouselOpinions'
import { Line } from './Line'

export const Opinions = () => {
    return (
        <>
            <section className='bg-[--white0] h-[350px] flex flex-col items-center justify-evenly text-black'>
                <Line></Line>
                <h1 className='titulo'>¿Qué opinan nuestros clientes?</h1>
                <CarouselOpinions home={'home'}></CarouselOpinions> 
            </section>
            <CarouselClients></CarouselClients>
        </>
    )
}

