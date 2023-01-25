import { User } from '@/types/User'
import React from 'react'
import { SearchRes } from '../types/SearchRes'
import UserItem from './userItem'

export default function UserList({search, users}:Props) {
  return (
    <div>
      
      {users?.length != 0 ? <p>Hasil Pencarian : <span>{search}</span></p> : ""} 
        {users?.map((user,index)=>(
          <UserItem key={index} user={user}/>
      ))}
    </div>
  )
}

interface Props{
  search?: string
  users?: User[]
}