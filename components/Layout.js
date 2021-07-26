import Head from 'next/head';
import {useRouter} from 'next/router';
import classes from '@/styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import ShowCase from './ShowCase';
const Layout = ({title, description, keywords, children}) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <ShowCase />}

      <div className={classes.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'Games Events | Find your favorite Games parties ',
  description: 'Find the latest Games and musical events around you !',
  keywords: 'music,games,anime,party,dance,songs',
};
export default Layout;
