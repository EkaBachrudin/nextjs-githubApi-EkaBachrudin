import React from 'react'
import { SearchIcon } from './icons/searchIcon';

interface Props{
    type?: 'button' | 'submit' | 'reset' | undefined;
    isLoading?: boolean;
}

export default function button({isLoading}:Props) {
  const Loading = ()=>{
    return (
      <span>x</span>
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
