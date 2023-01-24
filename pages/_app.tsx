import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import { Layouts } from './layouts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts> 
  )
}
