
import iconoEmpresa from '../assets/img/favicon.png'
import { Link, useLocation } from 'react-router-dom'

 
export const LogoWeb = ({props}) => {
  const location = useLocation();
  const styleBlue = 'flex flex-row gap-1 items-center opacity-80 text-white'
  const styleWhite = 'flex flex-row gap-1 items-center opacity-80 text-current '
  return (
    <>
     <Link to={'/'}>
      {/* {location.pathname == "/help"?styleWhite:styleBlue} */}
      <div className={location.pathname == "/help"?styleWhite:styleBlue}>
        <img className='w-[45px]' src={iconoEmpresa}/>
        <h1 className={props === 'footer'?'hidden':'font-bold'}>Global Logistic</h1>
      </div>
    </Link>
    </>
  )
   
}

