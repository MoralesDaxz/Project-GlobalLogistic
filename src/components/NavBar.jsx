import { React, useEffect, useState } from 'react'
import { LogoWeb } from './LogoWeb'
import { Link, useLocation } from 'react-router-dom'


export const NavBar = () => {
  const location = useLocation();
  const [mainModal, setMainModal] = useState(false)
  const [subModal, setSubModal] = useState(false)
  const [classMenu, setClassMenu] = useState('container')

 
  useEffect(() => {
    if (window.innerWidth < 767) {
      setMainModal(false)
      setClassMenu('container')
    } else {
      setMainModal(true)
    }
    
  }, [location.pathname || window.innerWidth])
  return (
    <>

      <div className='w-full fixed z-10 backdrop-blur-[3px] bg-[#0b090a73] py-2 flex flex-col justify-evenly items-start text-[--blanco0] md:flex-row md:items-center md:gap-0 md:justify-around'>
        <LogoWeb onClick={() => setSubModal(false)}></LogoWeb >
        {/* iconMenu en mobile al dar click oculta modal -> Padre (Menu) e Hijo (Personas/Empresas) */}
        {window.innerWidth < 768 &&
          <div className='absolute right-2 top-3'>
            <div className={classMenu} onClick={(e) => { classMenu === 'container' ? setClassMenu('change') : setClassMenu('container'); setMainModal(!mainModal); setSubModal(false) }}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        }
        {mainModal ? <div className='gap-4 h-[100px] py-2 flex flex-col justify-evenly items-start text-[--blanco0] md:h-auto md:py-0 md:flex-row md:items-center  md:gap-0 md:justify-around opacity-80 transition-all duration-700'>
          <div>{/* Padre que nos permite utlizar relative para luego ubicar con absolute el modal, y moverlo cerca del padre en md: */}
            <div className='group/servicios cursor-pointer h-full' onClick={() => setSubModal(!subModal)} >
              <p className='pl-8 w-[150px] font-medium text-[14px] focus:underline hover:font-semibold md:text-center md:p-0 md:py-1 md:text-[1rem] '>Servicios</p>
              {window.innerWidth > 767 && <div className='flex flex-col items-center '>
                <div className=' w-0 bg-[--amarillo0] h-[2px] group-hover/servicios:w-[50%] transition-all duration-700'></div>
              </div>}
            </div>
            {subModal ?
              <div onMouseLeave={() => window.innerWidth > 768 ? subModal && setSubModal(!subModal) : ''} className='relative z-30 height-[160px] opacity-100 transition-all duration-700'>
                <div className='absolute top-[-1.2rem] left-[10rem] flex flex-col pt-1 gap-2 md:bg-[#0b090a73] md:left-0  md:top-[1.1rem] md:w-[160px] md:p-[2] rounded-b-md'>
                  <Link to={'/people'} className='font-normal text-[14px] hover:font-semibold  md:p-0  md:py-2 md:text-center md:text-[1rem]'>Personas</Link>
                  <Link to={'/companies'} className='font-normal text-[14px] hover:font-semibold  md:p-0  md:py-2 md:text-center md:text-[1rem]'>Empresas</Link>
                </div>
              </div>
              : <div className='h-0 w-0 opacity-0 transition-opacity duration-1000'></div>}
          </div>
          <Link to={'/us'} className='group/nosotros' onMouseEnter={() => { setSubModal(false) }}>
            <p className='cursor-pointer pl-8 w-[150px] font-medium text-[14px] hover:font-semibold md:text-center md:p-0 md:py-1 md:text-[1rem]'>Sobre nosotros</p>
            {window.innerWidth > 767 && <div className='flex flex-col items-center '>
              <div className=' w-0 bg-[--amarillo0] h-[2px] group-hover/nosotros:w-[80%] transition-all duration-700'></div>
            </div>}
          </Link>
          <Link to={'/help'} className='group/ayuda'>
            <p className='cursor-pointer pl-8 w-[130px] font-medium text-[14px] focus:underline hover:font-semibold md:text-center md:p-0 md:py-1 md:text-[1rem]'>FAQs</p>
            {window.innerWidth > 767 && <div className='flex flex-col items-center '>
              <div className=' w-0 bg-[--amarillo0] h-[2px] group-hover/ayuda:w-[40%] transition-all duration-700'></div>
            </div>}
          </Link>
        </div>
          : <div className='h-0 w-0 opacity-0 transition-all duration-700'></div>}
      </div>
    </>
  )
}