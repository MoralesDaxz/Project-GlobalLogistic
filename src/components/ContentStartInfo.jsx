import React from 'react'
import { ToPeople } from './ToPeople'
import { ToCompanies } from './ToCompanies'
import { ToEstimatePeople } from './ToEstimatePeople'
import { ToNewCompany } from './ToNewCompany'
import {ToEstimateCompany} from './ToEstimateCompany'

export const ContentStartInfo = ({home,people,company}) => {
 
    return (
        <> 
        {home == 'home'? <div className=' relative bottom-[3rem]  md:w-[98%] lg:left-[11%] lg:w-[85%] flex flex-row justify-center items-center'>
            <ToPeople></ToPeople>
            <ToCompanies></ToCompanies>
        </div>:people =='people'?<div className='w-full  flex flex-row justify-center '>
            <ToEstimatePeople></ToEstimatePeople>
            <ToCompanies></ToCompanies>
        </div>:company =='company'?<div className='w-full flex flex-row justify-center '>
            <ToEstimateCompany></ToEstimateCompany>
            <ToNewCompany></ToNewCompany>
        </div>:''}
        </>
    )
}

