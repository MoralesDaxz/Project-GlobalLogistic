import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { ordenesDeEnvios } from '../utils/envios'
import { MdClose } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWarehouse } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa";
export const TrackingPack = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [consult, setConsult] = useState(false)
    const [noFound, setNoFound] = useState(false)
    const onSubmit = (data) => {
        const comparacion = ordenesDeEnvios.filter((item, index) => item.numero == data.orderNumber)
        console.log(comparacion);
        if (comparacion.length > 0) {
            setConsult(comparacion)
        } else {
            setNoFound(true)
            setTimeout(() => {
                setNoFound(false)
            }, 5000);
        }


    };

    return (
        <>
            <form className=' flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <div className=' md:w-[50%] md:self-center  bg-[#0000006b] rounded-md p-4 text-white'>
                    <h2 className='opacity-90 pb-3 text-[1.5rem] font-bold'>Siga su envío</h2>
                    <div className='flex flex-col justify-around md:flex-row md:justify-center md:items-start gap-3'>
                        <div className='md:w-[70%] h-11'>
                            <input className='w-full h-9  p-1 border-solid border-[1px]  focus:border-[--azul1] rounded outline-none text-black text-sm'
                                placeholder='Introduzca número de envío'
                                {...register("orderNumber", {
                                    required: 'Ingrese número de envío.',
                                    pattern: { value: /^[0-9]+$/, message: 'Use solo números.' }
                                })} />
                            {errors.orderNumber && <p role="alert" className='text-[--amarillo1] text-end md:text-start text-[13px] pt-1'>{errors.orderNumber?.message}</p>}

                        </div>
                        <div>
                            <input className='bg-[--amarillo0] h-7 cursor-pointer  text-[16px] hover:bg-[#f78000e0] md:h-9 p-1 rounded-md' type="submit" value={'Consultar'} />
                        </div>
                    </div>
                </div>

            </form>
            {consult.length > 0 ? <div className='w-full  absolute z-20 top-[20%] left-0 md:top-[12%] md:w-[70%] md:left-[25%]'>
                <div className='flex flex-row items-center justify-evenly  w-full md:w-[75%]  bg-[#002f498c] backdrop-blur-[12px] rounded-xl p-4'>
                    <div onClick={() => { setConsult(false) }} title='Cerrar' className='absolute right-2 top-2 cursor-pointer p-1'>
                        <MdClose size={'1.2rem'} className='text-white hover:text-[--amarillo0]' />{/* Elimina LS y element dato que viaja a TableEstimed de esta forma nada queda en memoria */}
                    </div>

                    <div className='flex flex-col gap-2 text-white font-[100]'>
                        <h3 className='text-start text-[1.5rem] text-[--amarillo0] font-bold'>Informacion de Envio</h3>
                        <div className='flex flex-row justify-start gap-5'>
                            <p className='w-[90px] font-[300]'>Paquete Nº:</p>
                            <p>{consult[0]?.numero}</p>
                        </div>
                        <div className='flex flex-row justify-start gap-5'>
                            <p className='w-[90px] font-[300]'>Destino:</p>
                            <p>{consult[0]?.hasta}</p>
                        </div>
                        <div className='flex flex-row justify-start gap-5'>
                            <p className='w-[90px] font-[300]'>Estado:</p>
                            <p className='capitalize'>{consult[0].estado}</p>
                        </div>
                        <div className='flex flex-row justify-start gap-5'>
                            <p className='w-[90px] font-[300]'>Mensaje:</p>
                            <p >{consult[0].mensaje}</p>
                        </div>
                        <div className='flex flex-row justify-start gap-5'>
                            <p className='w-[90px] font-[300]'>Actualizacion:</p>
                            <p>{consult[0]?.fechaActualizacion}</p>
                        </div>
                        <div className='flex flex-row justify-start gap-5'>
                            <p className='w-[90px] font-[300]'>Recibe:</p>
                            <p>{consult[0]?.recibe}</p>
                        </div>
                    </div>
                    {consult[0].estado == 'almacen' ?
                        <div>
                            <FaWarehouse className='opacity-90 text-[--amarillo0] text-[50px] md:text-[80px]' />
                        </div> : consult[0].estado == 'destino' ?
                            <div>
                                <FaCheckDouble className='opacity-90 text-[--amarillo0] text-[50px] md:text-[80px]' />
                            </div> : consult[0].estado == 'ruta' ?
                                <div>
                                    <TbTruckDelivery className='opacity-90 text-[--amarillo0] text-[50px] md:text-[80px]' />
                                </div> : <div></div>

                    }
                </div>
            </div> : noFound ? 
            <div className=' flex flex-col gap-2 items-center  text-white font-[100]'>
                <h3 className='text-center text-[1rem] md:text-[1.1rem]  lg:text-[1.2rem] p-2 bg-black rounded md:w-[50%] text-[--amarillo0] font-bold'>Pedido no registrado verifique numero.</h3>
            </div> : ''}
        </>
    )
}
