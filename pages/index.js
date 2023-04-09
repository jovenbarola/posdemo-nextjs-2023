import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <img src="https://lh4.googleusercontent.com/h-uDcdEZPSYyrVdtuUT85Y1wCPWHK31HsXDJvfnXC5yJYHDJkcfKwhfmoMYGNQWpFKqzg3_IzqpdGsU6CZI090tyJ3W3IC70K9BGmUezrcqYXkMJ=w1280" />
        <h2 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Joven!</a>
          <br />
          NextJS Demo Project
        </h2>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Tablet Ordering &rarr;</h3>
            <p>
              This is a demo source code for showing tablet ordering work
              written in React.
            </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Kiosk Ordering &rarr;</h3>
            <p>
              This is a demo source code for showing kiok ordering works written
              in React.
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Order Queue &rarr;</h3>
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
