import { Link } from "react-router-dom";
import styles from './Header.module.scss';


function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.homeWrapper}>
        <Link className={styles.link} to='/'>Home</Link>
        <div className={styles.currentLocation}>
          Current location: Gdańsk
        </div>
      </div>
      <nav className={styles.nav}>
        <Link className={styles.link} to='/'>Temperature</Link>
        <Link className={styles.link}  to='/pressure'>Pressure</Link>
      </nav>
    </header>
  );
}

export default Header;