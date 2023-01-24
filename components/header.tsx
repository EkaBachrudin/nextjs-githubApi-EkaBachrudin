import React from 'react'
import { GithubIcon } from './icons/githubIcon'

export const Header = () => {
  return (
     <div className='d-flex'>
            <div className='me-2'>
                  <GithubIcon></GithubIcon>
            </div>
            <div className=''>
                  <h3 style={{ marginBottom: "-5px" }}> Github Api </h3>
                  <small className='' style={{ marginLeft: "3px" }}> By Eka Bachrudin</small>
            </div>
      </div>
  )
}
