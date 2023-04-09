import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function KioskOrdering() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kiosk Ordering</title>
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Kiosk Ordering</h2>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.jbarola.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created with ⚡️&nbsp;<b>Joven Barola (jbarola.net)</b>&nbsp;
        </a>
      </footer>
    </div>
  );
}
