import React, { useState, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { GeneralValues } from '../context/GeneralValues'
import { CalculatePrice } from './CalculatePrice'
import { TableEstimated } from './TableEstimated'
import { MdClose } from "react-icons/md";

export const FormEstimate = ({ showForm }) => {

    const activeClassRadio = 'cursor-pointer text-black flex flex-col bg-[#a6adb1]  justify-center items-center w-full  rounded md:gap-0  '
    const inactiveClassRadio = 'cursor-pointer text-[white] flex flex-col  bg-[#a6adb1] justify-center items-center w-full rounded    md:gap-0  '

    const [fromState, setFromState] = useState(false)
    const [toState, setToState] = useState(false)
    const [city, setCity] = useState(false)/* Validacion de select */
    const [modalDimensions, setModalDimensions] = useState(false)
    const [clickDocumento, setClickDocumento] = useState(false)
    const [clickCaja, setClickCaja] = useState(false)
    const [clickPallet, setClickPallet] = useState(false)
    const [showModalsPrice, setShowModalsPrice] = useState(false)

    const { register, handleSubmit, reset, resetField, formState: { errors } } = useForm()
    const { dataEstimate, setDataEstimate} = useContext(GeneralValues);

    const validateInputs = (props) => {
        if (props === 'documento') {
            setModalDimensions(false); setDataEstimate(false); setClickDocumento(true); setClickCaja(false); setClickPallet(false)
        } else if (props === 'caja') {
            setClickDocumento(false); setClickPallet(false); setModalDimensions(true); setDataEstimate(false); setClickCaja(true)
        }
        else if (props === 'pallet') {
            setClickDocumento(false); setClickCaja(false); setModalDimensions(true); setDataEstimate(false); setClickPallet(true)
        }
        else if (props === ('select')) {
            (fromState || toState) === false ? setCity(true) : setCity(false)
        }
        else if (props === 'successForm') {
            setCity(false); setClickDocumento(false); setClickPallet(false); setClickCaja(false)
        }
    }
    useEffect(() => { setDataEstimate(false) }, [])

    return (
        <>
            <div className='w-full flex flex-col items-center absolute z-20 top-[15%] md:top-[15%]  text-white '>
                <div className='flex flex-col items-center  w-[98%] md:w-[75%]  bg-[#002f498c] backdrop-blur-[12px] rounded py-1'>
                    <div onClick={() => {showForm(false);setDataEstimate(false)}} title='Cerrar' className='absolute right-2 top-2 cursor-pointer p-1'>
                        <MdClose className='text-[1.2rem] hover:text-[#F77F00]'/>{/* Elimina LS y element dato que viaja a TableEstimed de esta forma nada queda en memoria */}
                    </div>
                    <div className='w-full flex flex-col items-center md:py-[1rem] gap-5 '>
                        <form className='w-[90%] flex flex-col items-center gap-4 md:w-[98%] md:gap-4' id='form1' onSubmit={
                            handleSubmit(
                                (data) => {
                                    if ((data.desde && data.hasta) !== 'ciudad') {
                                        setDataEstimate(data)
                                        setShowModalsPrice(true)
                                        validateInputs('successForm')
                                        reset()    /* Nos permite darle reset a campos del formulario*/
                                    } else if ((data.desde || data.hasta) === 'ciudad') {
                                        setCity(true)
                                    }
                                }
                            )
                        }>
                            <div className='w-full flex flex-row justify-center gap-[5%]'>
                                <div className='w-[35%] flex flex-col gap-1 md:w-[20%] lg:gap-4 lg:w-[25%] lg:flex-row lg:items-end'>
                                    <label htmlFor='desde' className='text-[1.1rem] lg:text-[1.3rem]'>Desde</label>
                                    <select  {...register("desde", {
                                        required: 'Indique origen envío',
                                        onChange: (e) => { setFromState(true); validateInputs('select') }
                                    })} className='selectEstimate rounded outline-none w-[100%] p-2 text-black text-[14px] font-semibold md:text-[16px] lg:p-0 lg:pt-2 lg:px-2'>
                                        <option className='md:text-[14px]' disabled selected value="ciudad">Ciudad</option>
                                        <option className='md:text-[14px]' value="Madrid">Madrid</option>
                                        <option className='md:text-[14px]' value="Barcelona">Barcelona</option>
                                        <option className='md:text-[14px]' value="Valencia">Valencia</option>
                                        <option className='md:text-[14px]' value="Segovia">Segovia</option>
                                        <option className='md:text-[14px]' value="Malaga">Malaga</option>
                                    </select>
                                </div>
                                <div className='w-[35%] flex flex-col gap-1 md:w-[20%] lg:gap-4 lg:w-[25%] lg:flex-row lg:items-end lg:justify-center'>
                                    <label htmlFor='hasta' className='text-[1.1rem] lg:text-[1.3rem] lg:pt-2'>Hasta</label>
                                    <select {...register("hasta", {
                                        required: 'Indique destino envío',
                                        onChange: (e) => { setToState(true); validateInputs('select') }
                                    })} className='selectEstimate rounded outline-none w-[100%] p-2 text-black text-[14px] font-semibold md:text-[16px] lg:p-0 lg:pt-2 lg:px-2'>
                                        <option className='md:text-[14px]' disabled selected value="ciudad">Ciudad</option>
                                        <option className='md:text-[14px]' value="Madrid">Madrid</option>
                                        <option className='md:text-[14px]' value="Barcelona">Barcelona</option>
                                        <option className='md:text-[14px]' value="Valencia">Valencia</option>
                                        <option className='md:text-[14px]' value="Segovia">Segovia</option>
                                        <option className='md:text-[14px]' value="Malaga">Malaga</option>
                                    </select>
                                </div>
                            </div>
                            {city ? <p className='w-fit bg-[#000000b6] text-[--amarillo0] text-[11px] font-extralight p-1 rounded'>Seleccione una ciudad</p> : ''}
                            <div className='flex flex-col gap-1 w-[95%] bg-[#b4b4b4b9] rounded py-[1px]  md:flex-row md:justify-evenly'>
                                <div onClick={() => { validateInputs('documento') }}
                                    className={clickDocumento ? activeClassRadio : inactiveClassRadio}>
                                    <div className='w-full  '>
                                        <input id='documento' value={'documento'} {...register("radio", {
                                            required: "Campo requerido.",
                                        })} type="radio" />
                                        <label htmlFor='documento' >
                                            <div className=' flex flex-row justify-center items-center gap-[20%] pl-[16%] w-full  md:gap-0 md:flex-col  md:w-auto'>
                                                <p className='text-[1.1rem] '>Documentos </p> {clickDocumento ? <span className='flex flex-col gap-1 items-center  text-[11px] '><p>Estandar</p><p>40<span className=' text-[--amarillo0]'> * </span>30<span className='text-[--amarillo0]'> * </span>1</p></span> : <span></span>}
                                            </div>
                                        </label>
                                    </div>
                                    {clickDocumento ? <div className='transition-[width] duration-700  w-full h-[2px] bg-[--azul1]  mt-1'></div> : <div className='w-0 h-[2px] bg-[--azul1] md:self-center transition-[width] duration-700 mt-1'></div>}
                                    {errors.radio ? <p className='w-fit bg-[#000000b6] text-[--amarillo0] text-[11px] font-extralight p-1 rounded'>{errors.radio.message}</p> : ''}
                                </div>
                                <div onClick={() => { validateInputs('caja') }}
                                    className={clickCaja ? activeClassRadio : inactiveClassRadio}>
                                    <div className='w-full'>
                                        <input id='caja' value={'caja'} {...register("radio", {
                                            required: "Campo requerido.",
                                        })} type="radio" />
                                        <label htmlFor='caja'>
                                            <div className=' flex flex-row justify-center items-center gap-[20%] pl-[16%] w-full  md:gap-0 md:flex-col md:w-auto'>
                                                <p className='text-[1.1rem]'>Caja</p>{clickCaja ? <span className='flex flex-col justify-center gap-1  text-[11px] text-[center]'><p >Peso máximo</p><p>25<span className=' text-[--amarillo0]'>kg</span></p></span> : <span></span>}
                                            </div>
                                        </label>
                                    </div>
                                    {clickCaja ? <div className='transition-[width] duration-700 w-full md:self-center h-[2px] bg-[--azul1] mt-1'></div> : <div className='w-0 h-[2px] bg-[--azul1] md:self-center transition-[width] duration-700 mt-1'></div>}
                                    {errors.radio ? <p className='w-fit bg-[#000000b6] text-[--amarillo0] text-[11px] font-extralight p-1 rounded'>{errors.radio.message}</p> : ''}
                                </div>
                                <div onClick={() => { validateInputs('pallet') }}
                                    className={clickPallet ? activeClassRadio : inactiveClassRadio}>
                                    <div className='w-full '>
                                        <input id='pallet' value={'pallet'} {...register("radio", {
                                            required: "Campo requerido.",
                                        })} type="radio" />
                                        <label htmlFor='pallet'>
                                            <div className=' flex flex-row justify-center items-center gap-[20%] pl-[16%] w-full  md:gap-0 md:flex-col md:w-auto'>
                                                <p className='text-[1.1rem]'>Pallet</p>{clickPallet ? <span className='flex flex-col justify-center gap-1 text-[11px] text-[center]'><p>Peso máximo</p><p>2000<span className=' text-[--amarillo0]'>kg</span></p></span> : <span></span>}
                                            </div>
                                        </label>
                                    </div>
                                    {clickPallet ? <div className='transition-[width] duration-700 md:self-center w-full h-[2px] bg-[--azul1] mt-1'></div> : <div className='w-0 h-[2px] bg-[--azul1] md:self-center transition-[width] duration-700 mt-1'></div>}
                                    {errors.radio ? <p className='w-fit bg-[#000000b6] text-[--amarillo0] text-[11px] font-extralight p-1 rounded'>{errors.radio.message}</p> : ''}
                                </div>
                            </div>
                            <div className='md:flex md:flex-row '>
                                {clickCaja || clickDocumento || clickPallet ? <div className='flex flex-col gap-3 items-center'>
                                    <label htmlFor='number' >Peso del artículo <span className='text-[--amarillo0]'>(kg)</span></label>
                                    <input type='number' step='0.01' {...register("peso", {
                                        valueAsNumber: true,
                                        required: 'Indique peso, Ejemplo: 1 o 1.5',
                                        min: { value: clickDocumento ? 0.1 : clickCaja ? 1 : clickPallet ? 10 : '', message: clickDocumento ? 'Peso mínimo 0.1kg' : clickCaja ? 'Peso mínimo 1kg' : clickPallet ? 'Peso mínimo 10kg' : '' },
                                        max: { value: clickDocumento ? 2 : clickCaja ? 25 : clickPallet ? 2000 : '', message: clickDocumento ? 'Peso máximo 2kg' : clickCaja ? 'Peso máximo 25kg' : clickPallet ? 'Peso máximo 2000kg' : '' }
                                    })} className='w-[50%] text-black text-center font-semibold' placeholder='Peso' />
                                    {errors.peso && <p className='w-fit bg-[#000000b6] text-[--amarillo0] text-[11px] font-extralight p-1 rounded'>{errors.peso.message}</p>}
                                </div>
                                    : ''}
                                {modalDimensions ?
                                    <div className='flex flex-col items-center justify-center w-full h-[220px] opacity-100 transition-all duration-700 md:h-auto md:w-auto md:justify-start'>
                                        <div className=' flex flex-col justify-center items-center gap-3  rounded md:w-[280px]'>
                                            <div>
                                                <h2 className=''>Dimensiones del artículo <span className='text-[--amarillo0]'>(cm)</span></h2>
                                            </div>
                                            <div className='opacity-100 transition-all duration-1000 flex flex-col items-center gap-2 md:gap-1 md:flex-row md:justify-center'>
                                                <input type='number' step='0.01' {...register("longitud", {
                                                    required: 'Indique medida',
                                                    min: { value: 1, message: 'Largo mínimo 1cm' },
                                                    max: { value: 300, message: 'Largo máximo 300cm' },
                                                    valueAsNumber: true,
                                                })} className='w-[60%] text-black text-center font-semibold md:w-[30%] ' placeholder='Longitud' />
                                                <label className='text-[18px] text-[--amarillo0]'>*</label>
                                                <input type='number' step='0.01' {...register("alto", {
                                                    required: 'Indique medida',
                                                    min: { value: 1, message: 'Alto mínimo 1cm' },
                                                    max: { value: 220, message: 'Alto máximo 220cm' },
                                                    valueAsNumber: true,
                                                })} className='w-[60%] text-black text-center font-semibold md:w-[30%] ' placeholder='Alto' />
                                                <label className='text-[18px] text-[--amarillo0]'>*</label>
                                                <input type='number' step='0.01'  {...register("ancho", {
                                                    required: 'Indique medida',
                                                    min: { value: 1, message: 'Ancho mínimo 1cm' },
                                                    max: { value: 220, message: 'Ancho mínimo 220cm' },
                                                    valueAsNumber: true,
                                                })} className='w-[60%] text-black text-center font-semibold md:w-[30%] ' placeholder='Ancho' />
                                            </div>
                                            {(errors.longitud || errors.alto || errors.ancho) && <p className='w-fit bg-[#000000b6] text-[--amarillo0] text-[11px] font-extralight p-1 rounded'>{errors.longitud?.message || errors.alto?.message || errors.ancho?.message}</p>}
                                        </div>
                                    </div> : <div className='h-0 opacity-0 transition-all duration-700'></div>}
                            </div>

                            <div className='w-full flex flex-col items-center justify-center gap-2 md:gap-0 md:flex-row md:justify-around '>
                                {dataEstimate && <div>
                                    <CalculatePrice></CalculatePrice>
                                </div>}
                                <button type='submit' onClick={() => { fromState && toState ? setCity(false) : setCity(true); setDataEstimate(false) }} className='bg-[#0098dfab] hover:bg-[#0099df] rounded text-white p-4 font-light text-center'>Consultar</button>
                            </div>{/* set data false, ya que al quedar en memoria datos, renderiza 2 veces y por tanto, guarda en LS 2 datos iguales, de esta manera solo guarda 1 dato, dejando en blanco para sig registro */}
                        </form>
                        {localStorage.length !== 0 ? <TableEstimated></TableEstimated> : ''}
                    </div>
                </div>
            </div>
        </>
    )
}