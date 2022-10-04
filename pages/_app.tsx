import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { makeStore } from '../src/redux/store'
import { Provider, ReactReduxContext } from 'react-redux'

const {wrapper} = require('../src/redux/store/index')

function MyApp({ Component, pageProps }: AppProps) {
  const {store, props} = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider> 
  )
}

export default MyApp 
