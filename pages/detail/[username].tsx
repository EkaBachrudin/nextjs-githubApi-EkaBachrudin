import ProfileHeader from '@/components/profileHeader'
import RepoList from '@/components/repoList'
import { getDetailUser } from '@/slices/detailUserSlice'
import { RootState } from '@/store'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function Detail() {

  const dispatch = useDispatch() 
  const { userDetail } = useSelector((state: RootState) => state.detailUser)
  // dispatch(getDetailUser(username))

  const router = useRouter();
  useEffect(()=>{
      if(!router.isReady) return;
      dispatch(getDetailUser(router.query.username))
      console.log(userDetail.reposUrl)

  }, [router.isReady]);

  return (
    <div className='py-10'>
        <Head>
        <title>Detail {userDetail.name} </title>
        </Head>
        <div>
        <ProfileHeader user={userDetail} />
        <RepoList reposUrl={userDetail.repos_url}/>
        </div>
    </div>
  )

}
