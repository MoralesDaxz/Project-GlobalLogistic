import React from 'react'
import { LogoWeb } from './LogoWeb'
import iso9001 from '../assets/img/iso1.png'
import iso14001 from '../assets/img/iso4.png'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { Line } from './Line'
import querystring from 'querystring';

export const Footer = ({background = 'blue'}) => {
const styleBlue = 'text-white bg-[--azul0] flex flex-col items-center'
const styleWhite = 'text-black opacity-100 bg-[white] flex flex-col items-center'
  function enviarMsg() {
    const numero = '34621000000'; // Número de teléfono al que deseas enviar el mensaje
    const mensaje = 'Hola! Me gustaría tener más información de los servicios de envío.'; // Mensaje que deseas enviar
  
    const parametros = {
      phone: numero,
      text: mensaje,
    };
    const enlaceWhatsApp = `https://wa.me/${parametros.phone}?${querystring.stringify(parametros)}`;
    window.location.href = enlaceWhatsApp;
  }
  return (
    <>  
      <section className={background==='white'?styleWhite:styleBlue}>
        <article className=' w-full flex flex-row justify-between items-center md:justify-around p-4 md:p-2'>
          <div className='opacity-90 hover:opacity-100'>
            <LogoWeb  props={window.innerWidth < 768?'footer':''}></LogoWeb>
            <div>
            </div>
          </div>
          <div className='flex flex-col font-[400] gap-2'>
            <Link to={'/people'} className='opacity-90 hover:opacity-100'>Personas</Link>
            <Link to={'/company'} className='opacity-90 hover:opacity-100'>Empresas</Link>
            <Link to={'us'} className='opacity-90 hover:opacity-100'>Nosotros</Link>
            <Link to={'/help'} className='opacity-90 hover:opacity-100'>FAQs</Link>
          </div>
          <div className='md:flex md:gap-7'>
            <img className=' h-[60px] md:h-[80px]' src={iso9001} alt='iso9001' />
            <img className=' h-[60px] md:h-[80px]' src={iso14001} alt='iso14001' />
          </div>
          <div className='flex flex-col gap-2'>
          <Link to={'https://www.facebook.com'} target='_blank' ><FaFacebook size={'26px'} className='opacity-75 hover:opacity-100' /></Link>  
          <Link to={'https://www.instagram.com'} target='_blank'><FaInstagram size={'26px'} className='opacity-75 hover:opacity-100'/></Link> 
          <FaWhatsapp onClick={()=>enviarMsg()} size={'26px'}  className='cursor-pointer opacity-75 hover:opacity-100'/>
         
          </div>
        </article>
        <Line></Line>
      </section>
    </>
  )
}

