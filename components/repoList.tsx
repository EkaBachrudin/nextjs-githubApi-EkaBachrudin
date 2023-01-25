import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
import { Repos } from '../types/Repos'
import fetcher from '../utils/fetcher'

export default function RepoList({reposUrl}:Props) {

  const {data,error,mutate}=useSWR<Repos[]>(reposUrl,fetcher,{refreshInterval:1000})

  const isLoading= !data && !error

  const onRefresh=()=>{
    mutate()
  }

  if(isLoading){
    return <div className='row d-flex justify-content-center'>Loading...</div>
  }

      return (
            <>
                  <div className='row d-flex justify-content-center'>         
                        <div className='col-lg-6'>
                              <p className='h2 fw-bolder my-4'>List Repository</p>
                              <div className='shadow'>
                                    {data?.map((repo,index)=>(
                                    <div key={index} className='card-item mb-3'>
                                          <Link href={repo.html_url} className='h4 fw-bold text-white'>{repo.name}</Link>
                                          <p className='mt-4'>{repo.description}</p>
                                                
                                          {repo.language ? <div className='mt-2'><span className='card-gg'>{repo.language}</span></div> : "" }
                                    </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </>
      )
}

interface Props{
  reposUrl?: string
}