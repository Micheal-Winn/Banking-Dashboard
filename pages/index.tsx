
import Head from 'next/head';
import Sidebar from '@/components/Sidebar/Sidebar';
import Auth from '@/components/Authentication/Auth';
import Dashboard from '@/components/Dashboard/Dashboard';
import AdminSetInfoModal from '@/components/utils/AdminSetInfoModal';

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
     <AdminSetInfoModal/>
     <Dashboard/>
    </main>
    </>
  )
}
