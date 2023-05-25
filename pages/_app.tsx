import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import Sidebar from "@/components/Sidebar/Sidebar";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import React from "react";
import { getCookie } from "cookies-next";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  // useEffect(() => {

  //   const token = getCookie("token");

  //   console.log("token",token) 
  //   console.log("render")
  //   if(token) {
  //     setAuthenticated(true);
  //   }else{ 
  //     router.push("/auth");
  //     setAuthenticated(true);
      
  //   } 
  // }, []);

  return (
    <main
      className={`${inter.className} min-[2000px]:container mx-auto bg-[#FBFBFB`}
    >
      <MantineProvider withGlobalStyles>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
          <Sidebar>
            {!authenticated ? (<Component {...pageProps} />) : null}
          </Sidebar>
          </Hydrate>
          </QueryClientProvider>
      </MantineProvider>
    </main>
  );
}
