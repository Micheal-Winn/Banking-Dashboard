
import Head from 'next/head';
import Sidebar from '@/components/Sidebar/Sidebar';
import Auth from '@/components/Authentication/Auth';
import Dashboard from '@/components/Dashboard/Dashboard';


export default function Home() {
  return (
    <>
     <Head>
        <title>My page title</title>
      </Head>
      <main
      className={``}
    >
     {/* <Auth/>  */}
     
     <Dashboard/>
    </main>
    </>
  )
}
