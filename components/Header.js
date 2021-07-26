import Link from 'next/link';
import classes from '../styles/Header.module.css';
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>
          <a>Cosplay Events</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href='/events'>
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
