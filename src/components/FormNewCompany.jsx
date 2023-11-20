import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { GeneralValues } from '../context/GeneralValues';
export const FormNewCompany = () => {
  const {  newCompany, setNewCompany} = useContext(GeneralValues);
  const { register, handleSubmit, reset, resetField, formState: { errors } } = useForm()
  
  return (
    <>
      {newCompany ? <div className='w-full flex flex-col items-center absolute z-20 top-[15%] md:top-[15%] '>
        <div className='flex flex-col items-center justify-center h-[350px] px-2 w-[98%] md:w-[45%]  bg-[#002f498c] backdrop-blur-[12px] rounded '>
          <div className='cursor-pointer absolute right-2 top-2' title='Cerrar' onClick={() => { setNewCompany(false) }}>
            <MdClose className='text-[1.2rem] text-white  hover:text-[#F77F00]'></MdClose>
          </div>
          {newCompany === true ?

            <form className='flex flex-col gap-4' onSubmit={handleSubmit((data) => {
              setNewCompany(data)
              reset()
              console.log(data);
            })}>
              <div className='flex flex-col gap-1'>
                <label className='text-white'>Número de Identificación Fiscal</label>
                <input   {...register("nif", {
                  required: 'Indique NIF ',
                  pattern: { value: /^[A-Za-z][0-9]{8}$/, message: 'Indique un NIF valido, ejemplo: A12345678' },
                })} placeholder=' A01234567'></input>
                {errors.nif ? <p className='w-fit bg-[#000000b6] text-[--amarillo0] text-[11px] font-extralight p-1 rounded'>{errors.nif.message}</p> : ''}
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-white'>Nombre de empresa</label>
                <input type='text'  {...register("empresa", {
                  required: 'Indique nombre de empresa',
                  min: { value: 12, message: 'Minimo 12 caracteres' },
                  max: { value: 40, message: 'Maximo 30 caracteres' }
                })} placeholder=' Compañia S L'></input>
                {errors.empresa ? <p className='w-fit bg-[#000000b6] text-[--amarillo0] text-[11px] font-extralight p-1 rounded'>{errors.empresa.message}</p> : ''}
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-white'>Telefono de contacto</label>
                <input type='tel'  {...register("tlf", {
                  required: 'Indique telefono',
                  pattern: { value: /^[0-9]{9}$/, message: 'Indique telefono valido, minimo 9 digitos' },
                })} placeholder=' 913000000'></input>
                {errors.tlf ? <p className='w-fit bg-[#000000b6] text-[--amarillo0] text-[11px] font-extralight p-1 rounded'>{errors.tlf.message}</p> : ''}
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-white'>Correo electronico</label>
                <input type='email'  {...register("correo", {
                  required: 'Indique correo',
                  pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/, message: 'Indique correo valido.' },
                })} placeholder=' correo@mail.com'></input>
                {errors.correo ? <p className='w-fit bg-[#000000b6] text-[--amarillo0] text-[11px] font-extralight p-1 rounded'>{errors.correo.message}</p> : ''}
              </div>

              <input className='cursor-pointer text-white  bg-[#f7800093] rounded hover:bg-[#F77F00] w-[30%] p-2' type='submit' value={'Enviar'}></input>

            </form> :
            <div className='w-[80%] text-[white] font-[400] text-[1.2rem] flex flex-col gap-8'>
              <div className='cursor-pointer absolute right-2 top-2 ' title='Cerrar' onClick={() => { setNewCompany(false) }}>
                <MdClose className='text-[1.2rem]  hover:text-[#F77F00]'></MdClose>
              </div>
              <p className='text-center'>¡Hemos registrado su empresa como <span className='text-[--amarillo0] font-[600]'>{newCompany.empresa}</span>, pronto le contactaremos!</p>
              <div className='text-[3rem] text-[--amarillo0] flex justify-center '>
                <FaCheck ></FaCheck>
              </div>
            </div>}
        </div>
      </div> : ''

      }


    </>
  )
}


