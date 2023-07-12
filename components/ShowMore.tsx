'use client'
import { ShowMoreProps } from '@/types'
import React from 'react'
import { useRouter } from 'next/navigation'
import CustomButton from './CustomButton'
import { updateSearchParams } from '@/utlis'

export const ShowMore = ({pageNumber, isNext,setLimit}:ShowMoreProps) => {

    const router = useRouter()

    const handleNavigation = () =>{
       // Calculate the new limit based on the page number and navigation type
       const newLimit = (pageNumber + 1) * 12;
 
        // const newPathName = updateSearchParams("limit",`${newLimit}`)
        setLimit(newLimit)
    }
 
  return (
    <div className=" w-full flex-center gap-4 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
          rightIcon=""
        />
      )}
    </div>
  );
}
