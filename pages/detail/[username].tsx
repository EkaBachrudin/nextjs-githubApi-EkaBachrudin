import { getDetailUser } from '@/slices/detailUserSlice'
import { RootState } from '@/store'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Detail() {

      const router = useRouter()
      const { username } = router.query

      const dispatch = useDispatch() 
      const { userDetail } = useSelector((state: RootState) => state.detailUser)
      

      console.log(userDetail)
  return (
    <div className='py-10'>
        <Head>
            <title>Detail </title>
        </Head>
        <div>
               
        </div>
    </div>
  )
}
