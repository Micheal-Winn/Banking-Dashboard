import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Inter} from 'next/font/google'
import { MantineProvider } from '@mantine/core';
import Sidebar from '@/components/Sidebar/Sidebar';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} min-[2000px]:container mx-auto bg-[#FBFBFB`}>
     <MantineProvider withGlobalStyles>
      <Sidebar>
       <Component {...pageProps} />
       </Sidebar>
     </MantineProvider>
    </main>
  )
}
