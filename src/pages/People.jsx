import React, { useEffect, useState } from 'react'
import { TrackingPack } from '../components/TrackingPack'
import ecommerce1 from '../assets/img/ecommerce1.jpg'
import cobertura from '../assets/img/cobertura.jpg'
import entrega from '../assets/img/entrega.jpg'
import fondoAbstract from '../assets/img/abstract.jpg'
import { CarouselOpinions } from '../components/CarouselOpinions'
import { ContentStartInfo } from '../components/ContentStartInfo'

export const People = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='parallax ' style={{ backgroundImage: `url(${fondoAbstract})` }}>
      <section className={`pt-[8rem] md:pt-[8.5rem] flex flex-col items-center`} /*   */ >
        <article className='w-[90%] md:[98%] lg:w-[86%]'>
          <TrackingPack></TrackingPack>
        </article>

        <article className='my-[2rem] w-full md:w-[88%] lg:w-[80%]'>
          <ContentStartInfo people={'people'} />
        </article>
        <article className=' h-[auto] w-[95%] lg:w-[90%] pb-[2rem] md:pb-[3rem] rounded backdrop-blur-[4px]' /* style={{ backgroundImage: `url(${img1})` }} */ >

          <div className='w-full flex flex-col items-center justify-center gap-[2rem]'>
            <div className='w-[80%] flex flex-col items-center justify-center gap-4 rounded bg-[#ffffff63] md:flex-row'>
              <div className='w-[50%] pt-4 md:pt-0'>
                <img className='w-[100%] rounded' src={ecommerce1} />
              </div>
              <div className='md:w-[50%] p-2 flex flex-col gap-3 '>
                <h2 className='subtitulo'>Pensado en ti Ecommerce</h2>
                <p className='parrafo'>Atrae nuevos clientes y enfócate en construir tu marca mientras nosotros <span className='font-medium'>nos encargamos de entregar los pedidos para tus clientes</span>. Nuestras opciones de entrega agendadas, para el mismo día o para el día siguiente, asegurarán una experiencia de compra memorable.</p>
              </div>
            </div>

            {window.innerWidth < 768 ?
              <div className='w-[80%] flex flex-col items-center justify-center gap-4 rounded bg-[#ffffff63] md:flex-row'>
                <div className='w-[50%] pt-4 md:pt-0'>
                  <img className='w-[100%]  rounded' src={cobertura} />
                </div>
                <div className='md:w-[50%] p-2 flex flex-col gap-3 '>
                  <h2 className='subtitulo'>Mayor cobertura de transporte</h2>
                  <p className='parrafo'>Operamos en las principales ciudades <span className='font-medium'>(Madrid, Barcelona, Valencia, Malaga, Segovia)</span>  y estamos creciendo de manera rápida adaptándonos a las necesidades de nuestros clientes.</p>
                </div>
              </div> : <div className='w-[80%] flex flex-col items-center justify-center gap-4 rounded bg-[#ffffff63] md:flex-row'>
                <div className='md:w-[50%] p-6 flex flex-col items-center gap-3 '>
                  <h2 className='subtitulo'>Mayor cobertura de transporte</h2>
                  <p className='parrafo'>Operamos en las principales ciudades <span className='font-medium'>(Madrid, Barcelona, Valencia, Malaga, Segovia)</span>  y estamos creciendo de manera rápida adaptándonos a las necesidades de nuestros clientes.</p>
                </div>
                <div className='w-[50%]'>
                  <img className='w-[100%]  rounded' src={cobertura} />
                </div>
              </div>}
            <div className='w-[80%] flex flex-col items-center justify-center gap-4 rounded bg-[#ffffff63] md:flex-row'>
              <div className='w-[50%] pt-4 md:pt-0'>
                <img className=' w-[100%]  rounded' src={entrega} />
              </div>
              <div className='md:w-[50%] p-2 flex flex-col gap-3 '>
                <h2 className='subtitulo'>Mejoramos la experiencia de entrega</h2>
                <p className='parrafo'>Una experiencia de entrega diseñada para maximizar la satisfacción de nuestros clientes.</p>
              </div>
            </div>

          </div>
          <div className='flex flex-col items-center p-[3rem]'>
            <CarouselOpinions></CarouselOpinions>
          </div>
        </article>
      </section>

    </div>
  )
}


