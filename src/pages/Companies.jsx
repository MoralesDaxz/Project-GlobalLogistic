import React, { useEffect } from 'react'
import fondoEmpresas from '../assets/img/empresas5.jpg'
import { TrackingPack } from '../components/TrackingPack';
import { ContentStartInfo } from '../components/ContentStartInfo';
import { Footer } from '../components/Footer';
import { CarouselOpinions } from '../components/CarouselOpinions';
import relax from '../assets/img/relax.jpg'
import { HiOutlineDocumentChartBar } from "react-icons/hi2"
import acuerdo from '../assets/img/acuerdo.jpg'
import experiencia from '../assets/img/experiencia.jpg'
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineDashboardCustomize } from "react-icons/md"

export const Companies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>

      <section className='parallax min-h-[100vh]  ' style={{ backgroundImage: `url(${fondoEmpresas})` }}>
        <div className='pt-[8rem] md:pt-[8.5rem] '>
          <div className='flex flex-col items-center '>
            <div className='w-[90%] md:w-full lg:w-[86%]'>
              <TrackingPack></TrackingPack>
            </div>
            <div className='my-[2rem] w-full md:w-[93%] lg:w-[80%]'>
              <ContentStartInfo company={'company'}></ContentStartInfo>
            </div>
            <div className='w-full flex justify-center mb-6'>
              <div className=' flex flex-col items-center justify-center md:flex-row gap-4 '>
                <div className='bg-[#ffffff8c] w-[320px] md:w-[230px] lg:w-[330px] md:h-[250px] rounded p-4 backdrop-blur-md flex flex-col justify-center gap-2'>
                  <div className='flex justify-center ' >
                    <HiOutlineDocumentChartBar className='text-[--azul1] text-[3rem] md:text-[4rem] ' />
                  </div>
                  <h2 className='text-center md:text-[1.2rem] font-[500]'>Tarifas preferentes</h2>
                  <div className='w-[90%] md:text-[13px] h-[1px] bg-[--amarillo0] self-center'></div>
                  <p>Benefíciese de precios atractivos para empresas basados en la frecuencia y los volúmenes de sus envíos.</p>
                </div>
                <div>
                  <div className='bg-[#ffffff8c] w-[320px] md:w-[230px] lg:w-[330px]  md:h-[250px] rounded p-4 backdrop-blur-md flex flex-col justify-center gap-2'>
                    <div className='flex justify-center ' >
                      <RiCustomerService2Fill className='text-[--azul1] text-[3rem] md:text-[4rem] ' />
                    </div>
                    <h2 className='text-center md:text-[1.2rem] font-[500]'>Asistencia excepcional</h2>
                    <div className='w-[90%] md:text-[13px] h-[1px] bg-[--amarillo0] self-center'></div>
                    <p>Aumente la eficiencia y controle todos sus envíos con las exclusivas herramientas de envío de Global.</p>
                  </div>
                </div>
                <div>
                  <div className='bg-[#ffffff8c] w-[320px] md:w-[230px] lg:w-[330px]   md:h-[250px] rounded p-4 backdrop-blur-md flex flex-col justify-center gap-2'>
                    <div className='flex justify-center'>
                      <MdOutlineDashboardCustomize className='text-[--azul1] text-[3rem] md:text-[4rem] ' />
                    </div>
                    <h2 className='text-center md:text-[1.2rem] font-[500]'>Servicios de primera</h2>
                    <div className='w-[90%] md:text-[13px] h-[1px] bg-[--amarillo0] self-center'></div>
                    <p>Benefíciese de nuestra experiencia y de nuestra amplia y fiable red logística.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=' h-[auto] w-[95%] lg:w-[90%] rounded ' /* style={{ backgroundImage: `url(${img1})` }} */ >
              <div className='w-full flex flex-col items-center justify-center gap-[2rem]'>
                <div className='w-[80%] flex flex-col items-center justify-center gap-4 rounded bg-[#ffffff8c] backdrop-blur-md md:flex-row'>
                  <div className='w-[50%] pt-4 md:pt-0'>
                    <img className=' w-[100%]  rounded' src={acuerdo} />
                  </div>
                  <div className='md:w-[50%] p-2 flex flex-col gap-3 '>
                    <h2 className='subtitulo'>¿Qué servicio de Global para empresas es el más adecuado para usted?</h2>
                    <p className='parrafo'>Tanto si envía folletos y paquetes pequeños como cargas mucho más grandes, pasando por todas las etapas intermedias, <span className=' font-medium'>le ofrecemos la cuenta ideal</span>  para simplificar la forma de envío y reducir costes.</p>
                  </div>
                </div>
                {window.innerWidth < 768 ?
                  <div className='w-[80%] flex flex-col items-center justify-center gap-4 rounded bg-[#ffffff8c] backdrop-blur-md md:flex-row'>
                    <div className='w-[50%] pt-4 md:pt-0'>
                      <img className='w-[100%]  rounded' src={experiencia} />
                    </div>
                    <div className='md:w-[50%] p-2 flex flex-col gap-3 '>
                      <h2 className='subtitulo'>Experiencia de entrega personalizada</h2>
                      <p className='parrafo'>Trazabilidad en tiempo real a través de nuestros dashboards personalizados con tu imagen corporativa.</p>
                    </div>
                  </div> : <div className='w-[80%] flex flex-col items-center justify-center gap-4 rounded bg-[#ffffff8c] backdrop-blur-md md:flex-row  md:justify-center'>
                    <div className='md:w-[50%] p-6 flex flex-col items-center gap-3 '>
                      <h2 className='subtitulo'>Experiencia de entrega personalizada</h2>
                      <p className='parrafo'>Trazabilidad en tiempo real a través de nuestro portal web personalizados con tu imagen corporativa, le pondremos <span className='font-medium'>en contacto con los expertos más adecuados</span>.</p>
                    </div>
                    <div className='w-[50%]'>
                      <img className='w-[100%]  rounded' src={experiencia} />
                    </div>
                  </div>}

                <div className='w-[80%] flex flex-col items-center justify-center gap-4 rounded bg-[#ffffff63] backdrop-blur-md md:flex-row'>
                  <div className='w-[50%] pt-4 md:pt-0'>
                    <img className='w-[100%] rounded' src={relax} />
                  </div>
                  <div className='md:w-[50%] p-2 flex flex-col gap-3'>
                    <h2 className='subtitulo'>Deje que Global Logistic haga el trabajo por usted</h2>
                    <p className='parrafo'>Como una empresa líder del mercado fiable, con <span className='font-medium'>experiencia y alcance global</span>, podemos ayudarle mucho más aparte de decirle cómo enviar un paquete. Tanto si está empezando con un pequeño negocio como si quiere optimizar una empresa sólida.</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col items-center p-[3rem] '>
                <CarouselOpinions></CarouselOpinions>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='w-full'>
        <Footer></Footer>
      </div>

    </>
  )
}

