import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head';
import '../Style/app.css';

import Layout from "../Components/layout"


export default function MyApp({ Component, pageProps }) {
    return (
      <div>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
     </div>
    )
  }