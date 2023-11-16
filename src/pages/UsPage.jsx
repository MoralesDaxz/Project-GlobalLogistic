import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import puntosVideo from '../assets/img/nieve.mp4'
import { Differences } from '../components/Differences';
import founder1 from '../assets/img/founder1.jpg'
import founder2 from '../assets/img/founder2.jpg'
import founder3 from '../assets/img/founder3.jpg'
import founder4 from '../assets/img/morales.png'
import { Footer } from '../components/Footer';
import bgBlack from '../assets/img/blackBG.jpg'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import { Fade } from "react-awesome-reveal";
export const UsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);
    return (
        <>
            <ParallaxProvider>

                {/* <video  className={window.innerWidth < 768 ? 'min-h-[3218px]' : window.innerWidth < 1120 ? 'h-[2048px]' : 'h-[1622px]'} autoPlay loop muted><source src={puntosVideo}></source></video> */}
                <div className='parallax w-full backdrop-blur-[4px] bg-[#161616bd]  font-bold  text-white ' style={{ backgroundImage: `url(${bgBlack})` }}> {/*  backdrop-blur-[4px] bg-[#161616bd]  */}
                    <div className=' pt-[8rem] flex-flex-col items-center justify-center'>
                        <Fade cascade damping={0.2}>
                            <div className='flex flex-col items-center'>
                                <h1 className='w-[96%] text-center text-[1.9rem] md:text-[2.5rem] lg:text-[3rem] pb-[4rem]'>Expertos en transporte y logística</h1>
                            </div>


                            <div className='w-full flex flex-col items-center gap-[2rem]'>
                                <div className='w-[90%] md:w-[80%]  flex flex-col items-center text-center gap-6'>
                                    <Fade cascade damping={0.2}>
                                        <h2 className='text-[1.2rem]'>Estamos enfocados en la sostenibilidad</h2>
                                        <p className='font-[300] text-start'>Como empresa logística, tenemos la enorme responsabilidad de dar ejemplo en nuestro sector y ser líderes en materia de sostenibilidad. Eso implica reducir nuestra huella de carbono y fijarnos los más elevados estándares en materia social y de gobernanza. A lo largo de los años, hemos redefinido la logística una y otra vez. Hoy en día ofrecemos la cartera más amplia de soluciones logísticas verdes del sector. Pero nuestro impacto será aún mayor si aunamos esfuerzos con ustedes. En cooperación con muchos de nuestros clientes, hemos introducido innovadoras soluciones logísticas para hacer más sostenibles sus cadenas de suministro y ayudarles a lograr sus objetivos medioambientales.</p>
                                        <p className='font-[300] text-start'>La sostenibilidad es responsabilidad nuestra: las decisiones que tomemos hoy pueden tener un impacto positivo en el futuro. Nuestros productos y soluciones logísticas verdes pueden minimizar sus emisiones de carbono sin menoscabo de su cadena de suministro.</p>
                                    </Fade>
                                </div>

                                <div className='w-[90%] md:w-[80%]  flex flex-col items-center text-center gap-6'>
                                    <Fade cascade damping={0.2}>
                                        <h2 className='text-[1.2rem]'>Fundadores</h2>
                                        <p className='font-[300] text-start'>Global está formado por un equipo de profesionales de alto nivel, con un conocimiento sólido y amplia experiencia en distintas áreas. El equipo original se estableció en Barcelona, pero Global fue desarrollado en Madrid por un grupo de ingenieros internacionales.</p>
                                    </Fade>
                                </div>

                                <div className='w-full flex flex-col items-center '>
                                    <div className='flex flex-wrap  gap-y-4 md:gap-y-0 gap-x-3   md:gap-8 items-center justify-center'>
                                        <Fade className='flex flex-wrap gap-y-4 gap-x-3 md:gap-y-0 md:gap-8 items-center justify-center' cascade damping={0.2}>
                                            <div className='gap-2 w-[100%] md:w-auto flex flex-col items-center justify-center'>
                                                <img className='rounded-[50%]' src={founder1}></img>
                                                <p className='text-[12px] md:text-[.9rem]'>Co-Fundador & CEO</p>
                                                <p className='font-[300]'>Maria Thyr</p>
                                            </div>
                                            <div className='gap-2 w-[100%] md:w-auto flex flex-col items-center justify-center'>
                                                <img className='rounded-[50%]' src={founder2}></img>
                                                <p className='text-[12px] md:text-[.9rem]'>Co-Fundador & GM</p>
                                                <p className='font-[300]'>Victor Obrados</p>
                                            </div>
                                            <div className='gap-2 w-[100%] md:w-auto flex flex-col items-center justify-center'>
                                                <img className='rounded-[50%]' src={founder3}></img>
                                                <p className='text-[12px] md:text-[.9rem]'>Co-Fundador & CTO</p>
                                                <p className='font-[300]'>Xavier Rosales</p>
                                            </div>
                                            <div className='gap-2 w-[100%] md:w-auto flex flex-col items-center justify-center'>
                                                <img className='rounded-[50%]' src={founder4} ></img>
                                                <p className='text-[12px] md:text-[.9rem]'> Developer</p>
                                                <p className='font-[300]'>Alfredo Morales</p>
                                            </div>
                                        </Fade>
                                    </div>
                                </div>
                                <Fade cascade damping={0.2}>
                                    <article>
                                        <div
                                            className=" py-5 rounded-md flex flex-col gap-5 w-full h-auto items-center justify-center md:flex-row md:flex-wrap lg:flex-row lg:h-[300px]">

                                            <div
                                                className="shadow-md bg-[#ffffff34] rounded-3xl flex flex-col items-center justify-center p-4 h-[210px] w-[70%] md:w-[35%] lg:w-[22%]">

                                                <div className="bgOtros flex flex-col items-center justify-center rounded  ">
                                                    <p className="text-[1.5rem]  font-semibold ">Servicios</p>
                                                    <h3
                                                        className="text-[24px] flex flex-row gap-2 justify-center items-center font-bold text-[--amarillo0]  text-center ">
                                                        <span className="text-[80px] text-[amarillo0]">5</span> &nbsp;Mil
                                                    </h3>
                                                    <div className="h-[1px] w-[80%] bg-[--azul1] self-center"></div>
                                                </div>

                                                <div className="text-center text-base leading-4"><p className='text-[.9rem] font-[300]'>Entrega efectiva, cumplimos a cabalidad con lo pautado.</p></div>
                                            </div>
                                            <div
                                                className=" shadow-md bg-[#ffffff34] rounded-3xl flex flex-col items-center justify-center p-4  h-[210px] w-[70%] md:w-[35%]  lg:w-[22%]">
                                                <div className="bgOtros flex flex-col items-center justify-center rounded  ">
                                                    <p className="text-[1.5rem] font-semibold ">Experiencia</p>
                                                    <h3
                                                        className="text-[24px] flex flex-row gap-2 justify-center items-center font-bold text-[--amarillo0] text-center ">
                                                        <span className="text-[80px] text-[--amarillo0]">40</span>Años
                                                    </h3>
                                                    <div className="h-[1px] w-[80%] bg-[--azul1] self-center"></div>
                                                </div>
                                                <div className="text-center text-base leading-4">
                                                    <div className="text-center leading-4"><p className='text-[.9rem] font-[300]'>Consolidados en el sector, brindando confianza a nuestros clientes.</p></div>
                                                </div>
                                            </div>
                                            <div
                                                className=" shadow-md bg-[#ffffff34] rounded-3xl flex flex-col items-center justify-center p-4  h-[210px] w-[70%] md:w-[35%] lg:w-[22%]">
                                                <div className="bgOtros flex flex-col items-center justify-center rounded  ">
                                                    <p className="text-[1.5rem] font-semibold ">Empleos</p>
                                                    <h3
                                                        className="text-[24px] flex flex-row gap-2 justify-center items-center font-bold text-[--amarillo0] text-center ">
                                                        <span className="text-[80px] text-[--amarillo0]">80</span>Indirectos
                                                    </h3>
                                                    <div className="h-[1px] w-[80%] bg-[--azul1] self-center"></div>
                                                </div>
                                                <div className="text-center text-base leading-4"><p className='text-[.9rem] font-[300]'>Ampliando nuestros lazos, somos más cada día.</p></div>
                                            </div>
                                            <div
                                                className=" shadow-md bg-[#ffffff34] rounded-3xl flex flex-col items-center justify-center p-4  h-[210px] w-[70%] md:w-[35%]  lg:w-[22%]">
                                                <div className="bgOtros flex flex-col items-center justify-center rounded  ">
                                                    <p className="text-[1.5rem] font-semibold ">Seguridad</p>
                                                    <h3
                                                        className="text-[24px] flex flex-row gap-2 justify-center items-center font-bold text-[--amarillo0] text-center ">
                                                        <span className="text-[80px] text-[--amarillo0]">365</span>Días
                                                    </h3>
                                                    <div className="h-[1px] w-[80%] bg-[--azul1] self-center"></div>
                                                </div>
                                                <div className="text-center text-base leading-4">
                                                    <div className="text-center leading-4"><p className='text-[.9rem] font-[300]'>Disponemos de almacén propio.</p></div>
                                                </div>
                                            </div>

                                        </div>
                                    </article>
                                </Fade>
                            </div>
                            <div>
                                <Differences></Differences>
                            </div>

                        </Fade>
                    </div>
                    <Footer></Footer>
                </div>

            </ParallaxProvider>
        </>

    )
}

