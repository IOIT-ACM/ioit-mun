import React from "react";
import Head from "next/head";

import '../styles/scss/style.scss';
import "../styles/globals.css";
import '../../public/css/plugins/bootstrap-grid.css';
import '../../public/css/plugins/font-awesome.min.css';
import '../../public/css/plugins/swiper.min.css';

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          {/* seo begin */}
          <title>IOIT MUN</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* seo end */}        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
