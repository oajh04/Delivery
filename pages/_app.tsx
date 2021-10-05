import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { Component } from "react";
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux'; 
import { PersistGate } from 'redux-persist/integration/react';
// import  configureStore from '../src/redux/store';
import wrapper, { persistor } from '../src/redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )

}
export default wrapper.withRedux(MyApp)