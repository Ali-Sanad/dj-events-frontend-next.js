import {FaExclamationTriangle} from 'react-icons/fa';
import Link from 'next/link';
import Layout from '@/components/Layout';
import classes from '@/styles/404.module.css';
const PageNotFound = () => {
  return (
    <Layout title='Page Not Found'>
      <div className={classes.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h3>OOPs, Somthing went wrong</h3>
        <Link href='/'>Go Back To Home Page</Link>
      </div>
    </Layout>
  );
};
export default PageNotFound;
