import React, { useEffect, useState } from 'react'

import {  FaAngleDown} from "react-icons/fa";

export const QuestionsCommon = ({props}) => {
    
  const [answerClass, setanswerClass] = useState(null)

  return (
    <>
   <div className='w-[92%] md:w-[70%] lg:w-[60%] font-[200] bg-[#f5f3f4] text-[--azul0] p-2 md:p-4 mb-6 rounded-md' >
          {props.map((item, indice) => {
            const isExpanded = indice == answerClass;
            return (
              <div className='flex flex-col w-full'>
                <div onClick={() => setanswerClass( isExpanded ? null : indice)} className='opacity-90 font-[500]  cursor-pointer flex flex-row justify-between items-center py-2'>
                  <h3 >{item.pregunta}</h3>
                  <FaAngleDown  className={isExpanded?'hover:scale-125 transition-all duration-700 text-[1rem] md:text-[1.2rem] text-[--azul1] rotate-180':'hover:scale-125 transition-all duration-700 text-[1rem] md:text-[1.2rem] text-[--azul1]'}/>
                </div>
                <div className='h-[1px] bg-[#a6adb1] w-full'></div>
                <div className={isExpanded?'flex flex-col justify-center h-[200px] md:h-[180px] lg:h-[120px] overflow-hidden transition-all duration-700':'flex flex-col justify-center h-[0px] overflow-hidden transition-all duration-700'}>
                  <p className='text-black text-[.9rem] md:text-[1rem]'>{item.respuesta}</p>
                </div>
              </div>
            )
          })}
        </div>
    </>
  )
}

