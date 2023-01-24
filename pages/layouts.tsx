import React, { PropsWithChildren } from 'react'

export const Layouts = ({children}:PropsWithChildren) => {
   return (
    <>
    <div className='container-fluid text-white'>
        <main>
            {children}
        </main>
    </div>
    </>
  )
}
