import React, { useContext, useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { GeneralValues } from '../context/GeneralValues';

export const TableEstimated = ({}) => {
    const {element, setElement, haveElement, setHaveElement,setDataEstimate} = useContext(GeneralValues);
   
    const date = new Date();
    const printRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        
    });
    
    const deleteElement = (param) => {
        const nuevoPresupuesto = element.filter(item => item.id !== param);
        setElement(nuevoPresupuesto);
        localStorage.setItem('presupuesto', JSON.stringify(nuevoPresupuesto));
    };

    useEffect(() => {
        setElement(JSON.parse(localStorage.getItem("presupuesto")));
    }, [localStorage.presupuesto])
    return (
        <>
            {element.length > 0 ?
            <div ref={printRef} className='w-full flex flex-col items-center py-1'>
                <div  className=' w-[90%] flex flex-col items-start md:items-center '>
                    <div className='mb-2 text-[1.2rem] text-center w-full'>
                        <h1 >Presupuesto - Global Logistic</h1>
                    </div>
                    <div className='w-full md:w-[80%]'>

                        <table className='text-[white]  bg-[#002f49d0] w-full md:w-full rounded'>
                            <thead className='text-[10px] md:text-[12px] lg:-[14px]'>
                                <tr className='capitalize font-semibold'>
                                    {Object.keys(element[0]).map((header, index) => (
                                        <th key={index} className='pt-2 pb-1'>{header !== 'id' ? header : ''}</th>
                                    ))}
                                    <th className='text-center'>Borrar</th>
                                </tr>
                            </thead>
                            <tbody className='text-[10px] md:text-[12px] lg:-[14px]'>
                                {element.map((fila, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-[#707274]  border-solid border-b-2 border-[--azul0]' : 'bg-[#707274]  border-solid border-b-2 border-[#969595]'}>
                                        {Object.keys(element[0]).map((header, index) => (
                                            <td key={index} className=' capitalize text-center py-2 '>{fila[header !== 'id' ? header : '']}</td>
                                        ))}
                                        <td id={fila.id} onClick={(e) => { deleteElement(e.target.id) }} className='cursor-pointer text-center text-[white] text-[14px] font-light hover:font-bold hover:text-[--azul0] focus:text-[--azul0]'>Borrar</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                      <div className='pt-1 font'>
                            <p>Total a pagar: {element.reduce((acc, curr) => acc + (curr.costo * 1), 0).toFixed(2)} €</p>
                        </div>

                        <div className='w-full flex flex-col pt-1'>
                            <p className='text-[11px] md:text-[13px] font-[200]'>{`Fecha ${date.toLocaleDateString()}, los precios estan sujetos a cambios.`}</p>
                            <p className='text-[11px] md:text-[13px] font-[200]'>Calculos realizados ( altura * ancho * longitud ) / 6000.</p>
                        </div>

                    </div>
                </div>
            </div>
                
                : ''}
            {element.length !== 0 && <div className=' flex flex-row gap-[2rem]'>
                <button className='p-2 bg-[#0098dfab] hover:bg-[#0099df] rounded' onClick={() => {handlePrint()}}>Imprimir</button>
                <button className='p-2 bg-[#f7800093] rounded hover:bg-[#F77F00]' onClick={() => {  setElement([]);localStorage.removeItem("presupuesto"); setDataEstimate(false)}}>Limpiar consultas</button>
            </div>}

        </>

    );
};