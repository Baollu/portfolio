import styles from '../styles/index.module.css'
import Header from './component/header';
import Image from 'next/image';

export default function home() {
  return (
    <>
      <Header />
      <section className={styles.wallpaper}>
        <div className={styles.picture}></div>
        <div>
          <h1 className={styles.title}>Bienvenue, Voici mon portfolio</h1>
        </div>
        <div>
          <span>Github</span>
          <a href="https://github.com/Baollu" target="_blank" rel="noopener noreferrer">
            <Image src="/github_image.jpg" alt="logo github" width={40} height={40} />
          </a>
        </div>
        <div>
          <span>Linkedin</span>
          <a href='https://www.linkedin.com/in/boris-cheng-8010992a1/' target='blank' rel='noopener noreferrer'>
            <Image src='/linkedin.png' alt="logo linkedin" width={40} height={40} />
          </a>
        </div>
        <section className={styles.portail}>
          <p>Présentation</p>
        </section>
      </section>
    </>
  );
}