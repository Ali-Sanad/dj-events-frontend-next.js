import Link from 'next/link';
import classes from '@/styles/Footer.module.css';
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>Copyright &copy; Games Events and Festivals 2021</p>
      <p>
        <Link href='/about'>About Us</Link>
      </p>
    </footer>
  );
};

export default Footer;
