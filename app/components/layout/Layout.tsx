import Head from "next/head";
import Script from "next/script";
import { FC, ReactNode, useEffect, useState } from "react";
import FavIcon from "../../assets/images/favicon.ico";
import Loader from '../ui/Loader';

interface ILayout {
  children: ReactNode;
  title: string;
}

const Layout: FC<ILayout> = ({ children, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div>
      <Head>
        <title>{title} | Taxi App</title>
        <meta name="description" content="Taxi App" />
        <link rel="shortcut icon" href={FavIcon.src} type="image/x-icon" />
      </Head>
      <Script
        strategy="beforeInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
      />

      <div style={{maxWidth: 480}} className='mx-auto relative overflow-hidden'>
        {/* {isLoading ? <Loader /> : children} */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
