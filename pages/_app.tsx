import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { Component } from "react";
import {wrapper} from '../src/redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )

}
export default wrapper.withRedux(MyApp)