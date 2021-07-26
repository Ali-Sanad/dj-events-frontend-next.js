import Head from 'next/head';

import classes from '../styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';
const Layout = ({title, description, keywords, children}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <div className={classes.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'Cosplay Events | Find your favorite Cosplay parties ',
  description: 'Find the latest Cosplay and musical events around you !',
  keywords: 'music,cosplay,anime,party,dance,songs',
};
export default Layout;
