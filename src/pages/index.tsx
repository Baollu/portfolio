import styles from '../styles/index.module.css'
import Header from './component/header';

export default function home() {
  return (
    <>
      <Header />
        <section className={styles.wallpaper}>
          <div className={styles.picture}></div>
          <h1 className={styles.title}>Bienvenue, Voici mon portfolio</h1>
          <div className={styles.reseau}> Github : </div>
        </section>
    </>
  );
}