import React from 'react'
import boxUp from '../assets/img/boxUp.png'
import bulb from '../assets/img/bulb.svg'
import hand from '../assets/img/handClick.png'
import camionPropio from '../assets/img/camionPropio.svg'
import cobertura from '../assets/img/cobertura.svg'
import electrico from '../assets/img/electric.svg'

export const Differences = () => {
    return ( 
        <>{/* <section className='bg-[--white0] mt-[5rem] md:mt-[7rem] mb-[1.5rem] w-full  md:px-10'> */}
            <section className='bg-[--white0]  mb-[1.5rem] w-full  md:px-10'>
                <article className='flex flex-col gap-8'>
                    <h2 className='titulo'>¿Que nos diferencia de otras empresas de transporte?</h2>
                    <div className='flex justify-center flex-wrap gap-y-5'>
                        <div className='  flex flex-col items-center justify-start p-1 gap-2 w-[45%] md:w-[30%] md:px-8 lg:px-11 text-center'>
                            <img className='w-[50px] h-[50px]' src={boxUp}></img>
                            <h3 className='subtitulo'>Propuesta de valor</h3>
                            <p className='parrafo'>Impulsa tus ventas online al ofrecer entregas programadas como el nuevo estándar de mercado</p>
                        </div>
                        <div className='flex flex-col items-center justify-start p-1 gap-2 w-[45%] md:w-[30%] md:px-8 lg:px-11 text-center'>
                            <img className='w-[50px] h-[50px]' src={bulb}></img>
                            <h3 className='subtitulo'>Tecnología</h3>
                            <p className='parrafo'>Todo nuestro ecosistema de productos ha sido diseñado internamente para garantizar la mejor experiencia de entrega a precios competitivos</p>
                        </div>
                        <div className='flex flex-col items-center justify-start p-1 gap-2 w-[45%] md:w-[30%] md:px-8 lg:px-11 text-center'>
                            <img className='w-[50px] h-[50px]' src={hand}></img>
                            <h3 className='subtitulo'>Experiencia de entrega</h3>
                            <p className='parrafo'>La experiencia de entrega mejor calificada de Europa en diferentes canales (Google, Trustpilot)</p>
                        </div>
                        <div className='flex flex-col items-center justify-start p-1 gap-2 w-[45%] md:w-[30%] md:px-8 lg:px-11 text-center'>
                            <img className='w-[50px] h-[50px]' src={camionPropio}></img>
                            <h3 className='subtitulo'>Red dedicada propia</h3>
                            <p className='parrafo'>Operamos en nuestros centros de distribución y puntos de entrega de última milla, nuestros arrastres son dedicados y todos nuestros conductores son profesionales</p>
                        </div>
                        <div className='flex flex-col items-center justify-start p-1 gap-2 w-[45%] md:w-[30%] md:px-8 lg:px-11 text-center'>
                            <img className='w-[50px] h-[50px]' src={cobertura}></img>
                            <h3 className='subtitulo'>Cobertura</h3>
                            <p className='parrafo'>Más de 60 ciudades en 4 países y continuamos creciendo</p>
                        </div>
                        <div className='flex flex-col items-center justify-start p-1 gap-2 w-[45%] md:w-[30%] md:px-8 lg:px-11 text-center'>
                            <img className='w-[50px] h-[50px]' src={electrico}></img>
                            <h3 className='subtitulo'>Sostenibilidad</h3>
                            <p className='parrafo'>Nos comprometemos a ser carbon net-zero en 2030, 20 años antes que el Acuerdo de París.</p>
                        </div>
                    </div>
                </article>
            </section>
        </>

    )
}

