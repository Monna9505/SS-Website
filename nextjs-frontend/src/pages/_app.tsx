import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../features/navigation/header';
import Footer from '../shared/footer';
import { useEffect, useState } from 'react';
import client from '../connection';

export default function App({ Component, pageProps }: AppProps) {
  const [headerLinks, setLinks] = useState<any[]>([]);

    useEffect(() => {
        client.fetch('*[_type == "headerMenu"]')
        .then((link:any) => {
            setLinks(link[0].items);
        });
    }, []);

  return (
    <>
      <Header headerLinks={headerLinks}></Header>
      <Component {...pageProps} />
      <Footer headerLinks={headerLinks}></Footer>
    </>
  )
}