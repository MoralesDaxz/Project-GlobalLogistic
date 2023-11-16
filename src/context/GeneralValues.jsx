import { React, useState, createContext, useEffect } from "react";
export const GeneralValues = createContext({});
export function GeneralValuesProvide({ children }) {
    const [stateLocalStorage, setStateLocalStorage] = useState([])
    const [dataEstimate, setDataEstimate] = useState(false) /* data de formulario  */
    const [partKilometer, setPartKilometer] = useState(0.060) /* multiplicador por kilometro  */
    const [partWeight, setPartWeight] = useState(2.5) /* multiplicador por peso  */
    const [partVolume, setPartVolume] = useState(0.30 ) /* multiplicador por volumen  */
    const [partDocument, setPartDocument] = useState(0.20 ) /* multiplicador para documento */
    const [element, setElement] = useState([])
    const [haveElement, setHaveElement] = useState(false)
    const [newCompany, setNewCompany] = useState(false)/* Form new company */
    return (
        <GeneralValues.Provider value={{
            dataEstimate, setDataEstimate,
            partKilometer, setPartKilometer,
            partWeight, setPartWeight,
            partVolume, setPartVolume,
            partDocument, setPartDocument,
            stateLocalStorage, setStateLocalStorage,
            element, setElement, 
            haveElement, setHaveElement,
            newCompany, setNewCompany

        }}>
            {children}
        </GeneralValues.Provider>
    )
}