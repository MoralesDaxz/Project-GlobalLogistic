import React, { useEffect, useState } from 'react'


import { Footer } from '../components/Footer';
import { commonQuestions } from '../utils/faq';
import { ordersQuestions } from '../utils/faq';
import { othersQuestions } from '../utils/faq';
import { QuestionsCommon } from '../components/QuestionsCommon';
import orderImg from '../assets/img/order.svg'
import othersImg from '../assets/img/others.svg'
import commonImg from '../assets/img/common.svg'

export const Help = () => {

  const [answerModal, setAnswerModal] = useState('common')



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='bg-[--azul0] min-h-[100vh] w-full pt-[8rem]  md:pb-[1rem] flex flex-col items-center gap-12 text-white'>
        <h2 className='text-[1.3rem] text-center  '>Preguntas Frecuentes</h2>
        <div className='w-[96%] md:w-[50%] flex flex-col items-center  '>
          <div className='  w-full flex flex-row justify-center  '>
            <div onClick={() => setAnswerModal('common')} className='bg-[white] flex flex-col items-center justify-between pt-2 text-[1.1rem] w-full  text-black cursor-pointer group/common rounded-tl-lg '>
              <img src={commonImg}></img>
              <div  className='p-4  w-full  text-center'> <p>Comunes</p> </div>
              <div className=' w-0 bg-[--amarillo0] h-[2px] group-hover/common:w-full transition-all duration-700'></div>
            </div>
            <div onClick={() => setAnswerModal('order')} className='bg-[white] flex flex-col items-center border-solid border-l-2 border-r-2 border-[--azul0] justify-between pt-2 text-[1.1rem] w-full  text-black cursor-pointer group/order '>
            <img src={orderImg}></img>
              <div  className=' p-4 w-full text-center'> <p>Pedido</p> </div>
              <div className=' w-0 bg-[--amarillo0] h-[2px] group-hover/order:w-full transition-all duration-700'></div>
            </div>
            <div onClick={() => setAnswerModal('others')} className='bg-[white] flex flex-col items-center justify-between pt-2 text-[1.1rem] w-full text-black rounded-tr-lg cursor-pointer group/others'>
            <img src={othersImg}></img>
              <div  className='p-4  w-full  text-center'> <p>Otras</p> </div>
              <div className=' w-0 bg-[--amarillo0] h-[2px] group-hover/others:w-full transition-all duration-700'></div>
            </div>
          </div>

        </div>
        <div className='w-full  flex flex-col items-center justify-center'>
          {answerModal === 'common' ? <div className=' flex flex-col items-center'>
            <QuestionsCommon props={commonQuestions}></QuestionsCommon>
          </div> : ''}
          {answerModal === 'order' ? <div className='flex flex-col items-center'>
            <QuestionsCommon props={ordersQuestions}></QuestionsCommon>
          </div> : ''}
          {answerModal === 'others' ? <div className='flex flex-col items-center'>
            <QuestionsCommon props={othersQuestions}></QuestionsCommon>
          </div> : ''}
        </div>
      <div className='px-2  pb-4 md:w-[80%] text-white font-[200] text-[.7rem] md:text-[.8rem]'>
        <p >De conformidad con el artículo 13 del Reglamento (UE) 2016/679, relativo a la protección de las personas físicas por lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, y al artículo 11 de la Ley Orgánica 3/2018, de Protección de Datos Personales y de garantía de los derechos digitales, le informamos que sus datos personales serán incorporados en los sistemas de información de GLOBAL LOGISTIC, S.L. con la finalidad de dar respuesta a sus consultas y peticiones. La base jurídica del tratamiento es su consentimiento expreso. Asimismo, le informamos que podrán ser destinatarios de sus datos las empresas del Grupo GLOBAL y terceros que sean necesarios para la prestación de los servicios. En cualquier momento puede ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad u oposición del tratamiento de sus datos, incluso llevar a cabo una reclamación en caso de que considere que GLOBAL LOGISTIC, S.L. está tratando de forma inapropiada sus datos personales, enviando una comunicación por escrito a la dirección Vía Augusta, n.º 17, Principal, 08006 Barcelona, o a través del correo electrónico gdpr@global.co. </p>
      </div>
      </div>
      <div className='w-full'>
        <Footer background='white'></Footer>
      </div>
    </>
  )

}
