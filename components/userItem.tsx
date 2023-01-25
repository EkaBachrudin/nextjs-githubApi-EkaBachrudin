import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { User } from '../types/User'
import { RightIcon } from './icons/rightIcon'

export default function UserItem({user}:Props) {
  return (
    <div className='d-flex justify-content-between'>
        <div className='my-2'>
           <Image alt="profile" width={40} height={40} src={user?.avatar_url}/>
           <span className='ms-5'>{user.login}</span>
        </div>
        <span className='d-flex align-self-center align-items-center'><Link className='button ms-2 shadow-sm text-white' href={`/detail/${user.login}`}>   <RightIcon/>   </Link></span>
    </div>
  )
}

interface Props{
    user:User
}