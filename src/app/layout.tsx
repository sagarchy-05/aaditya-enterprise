'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AADITYA ENTERPRISE',
  description: 'Aaditya Enterprise',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
