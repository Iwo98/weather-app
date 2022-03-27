import Header from "./Header";
import styles from './Layout.module.scss';


function Layout ({ children }) {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}

export default Layout;