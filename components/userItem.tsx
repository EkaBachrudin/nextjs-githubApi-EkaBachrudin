import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { User } from '../types/User'

export default function UserItem({user}:Props) {
  return (
    <div>
        <div>
           <Image alt="profile" width={40} height={40} src={user?.avatar_url}/>
            <span>{user.login}</span>
        </div>
        <span><Link href={`/detail/${user.login}`}> - </Link></span>
    </div>
  )
}

interface Props{
    user:User
}