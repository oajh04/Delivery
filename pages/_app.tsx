import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { Component } from "react";
import {wrapper} from '../src/redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Delivery</title>
        <link rel='icon' type='image/x-icon' href='/public/favicon.ico'></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )

}
export default wrapper.withRedux(MyApp)