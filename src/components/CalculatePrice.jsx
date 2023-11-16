import React, { useContext, useEffect, useState } from 'react'
import { GeneralValues } from '../context/GeneralValues';
import { tarifa } from '../utils/tarifa'
import { v4 as uuidv4 } from 'uuid';


export const CalculatePrice = ({ props }) => {

  const { dataEstimate,
    partKilometer,
    partWeight, 
    partVolume, 
    partDocument, 
    setHaveElement } = useContext(GeneralValues);
  const [uuid, setUuid] = useState(uuidv4())

  const volume = dataEstimate.longitud * dataEstimate.ancho * dataEstimate.alto;
  const volumetricDensity = 6000
  const weightVolumetric = Number((volume / volumetricDensity));
  const from = dataEstimate.desde
  const to = dataEstimate.hasta

  const tarifaCity = tarifa[from].find(e => to === Object.keys(e)[0])
  const priceKm = tarifaCity[to] * partKilometer  /*porcentaje KM 0.042*/
  const percentKm = (priceKm * 100) / 600
  const priceWeigth = dataEstimate.peso / 10 * partWeight /* porcentaje Peso 2.5 */
  const priceVol = weightVolumetric * partVolume /* porcentaje Volumetrico 0.89 */
  const priceDocument = dataEstimate.peso <= 10 ? dataEstimate.peso + percentKm : priceKm + dataEstimate.peso * partDocument
  const priceNoDocument = priceKm + priceVol + priceWeigth
  const infoLocalStorage = JSON.parse(localStorage.getItem("presupuesto"));

  const estimateObject = { desde: from, hasta: to, costo: dataEstimate.radio === 'documento' ? priceDocument.toFixed(2) : priceNoDocument.toFixed(2), peso: dataEstimate.peso, tipo: dataEstimate.radio, id: uuid, cantidad: 1 }


  function pushLocalStorage() {
    if (infoLocalStorage === null) {
      return localStorage.setItem("presupuesto", JSON.stringify([estimateObject]));
    } else {
      const valida = []
      valida.unshift(estimateObject, ...infoLocalStorage);
      return localStorage.setItem("presupuesto", JSON.stringify(valida));
      setHaveElement(true);
    }

  }
  useEffect(() => { dataEstimate ? pushLocalStorage() : '' }, [dataEstimate])/* cada vez que cambia la data utiliza funcion */
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      {/* <ModalPrice type={dataEstimate.radio} priceDocument={priceDocument} priceNoDocument={priceNoDocument}></ModalPrice> */}

      <div className='flex flex-col gap-2 text-[14px] md:text-[1.5rem]'>
        {dataEstimate.radio === 'documento' ? <p>Precio para este envio <span className=' font-bold hover:text-[--amarillo0] '>{priceDocument.toFixed(2)}</span> €</p> : <p>Precio para este envio <span className=' font-bold hover:text-[--amarillo0]'>{priceNoDocument.toFixed(2)}</span> €</p>}
      </div>
    </div>
  )
}
