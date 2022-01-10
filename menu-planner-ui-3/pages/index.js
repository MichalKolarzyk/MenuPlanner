import Head from 'next/head';
import Image from 'next/image';

import Plan from '../components/Plan';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <div className='p-5 h-screen'>
        <Head>
          <title>Menu Planner</title>
          <meta name="description" content="Table attempt" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Plan />
      </div>
    </div>
  )
}
