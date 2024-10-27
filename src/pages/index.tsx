import styles from '../styles/index.module.css'

export default function home() {
  return (
    <div className={styles.wallpaper}>
      <div className={styles.picture}/>
      <h1 className={styles.title}>Bienvenue, Voici mon portfolio</h1>
      <div className={styles.reseau}> Github : :</div>
    </div>
  );
}