import React from 'react'
import { EyeIcon } from './icons/eyeIcon';
import { SearchIcon } from './icons/searchIcon';

interface Props{
    type?: 'button' | 'submit' | 'reset' | undefined;
    isLoading?: boolean;
}

export default function button({isLoading}:Props) {
  const Loading = ()=>{
    return (
      <EyeIcon/>
    )
  }

  return (
      <>
      <button className='button ms-2 shadow-sm'>
            {isLoading ? <Loading/> : <SearchIcon />} 
      </button>
      </>
  )
}
