import Head from 'next/head';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Menu from './Menu';
import Footer from './Footer';

const name = 'Utsargo Roy';
export const siteTitle = 'Portfolio of Utsargo Roy';

export default function Layout({ children, home }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio of Utsargo Roy"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Menu />
      <main className='mt-[80px] flex-grow'>
     
      {children}
     
    
        </main>
        <SpeedInsights />
        <Footer />
    </div>
  );
}