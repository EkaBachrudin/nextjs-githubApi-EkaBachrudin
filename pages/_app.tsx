import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import { Layouts } from './layouts'

import { store } from '../store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layouts>
          <Component {...pageProps} />
      </Layouts>
    </Provider>
     
  )
}
