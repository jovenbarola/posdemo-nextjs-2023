import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>POSDemo React + NextJS</title>
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>NextJS Demo Project 2023</h2>

        <div className={styles.grid}>
          <a href="/tablet-ordering" className={styles.card}>
            <h3>Tablet Ordering &rarr;</h3>
            <p>
              This is a demo source code for showing tablet ordering work
              written in React.
            </p>
          </a>

          <a href="/kiosk-ordering" className={styles.card}>
            <h3>Kiosk Ordering &rarr;</h3>
            <p>
              This is a demo source code for showing kiok ordering works written
              in React.
            </p>
          </a>

          <a href="/queue-orders" className={styles.card}>
            <h3>Queue Orders &rarr;</h3>
            <p>
              This is demo source code for showing how ordering queue works
              written in React.
            </p>
          </a>
        </div>
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
