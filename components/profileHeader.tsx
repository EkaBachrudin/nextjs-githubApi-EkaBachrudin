import Image from 'next/image'
import React from 'react'
import { UserDetail } from '../types/UserDetail'

export default function ProfileHeader({user}:Props) {

  if(!user) return null

  const StatsItem=({value,label}:{value:number,label:string})=>{
    return (
      <div className='ms-2'>
        <p className='fw-bolder h3'>{value}</p>
        <p>{label}</p>
      </div>
    )
  }
  return (
    <div className='d-flex justify-content-center' style={{marginTop: "100px"}}>
        <Image alt="logo" src={user?.avatar_url} width={100} height={100} className="rounded-circle shadow border" />
        <div className='ms-4'>
            <p className='h1'>{user?.name}</p>
            <div className='d-flex justify-content-between'>
                <StatsItem value={user?.followers} label="Followers"/>
                <StatsItem value={user?.following} label="Following"/>
                <StatsItem value={user?.public_repos} label="Public Repos"/>
            </div>
        </div>
    </div>
  )
}

interface Props{
    user?: UserDetail
}