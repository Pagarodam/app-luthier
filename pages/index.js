import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { signIn, signOut, useSession, getSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          alt='logo'
          src='/../public/Logo Llamas.jpeg'
          title=''
          height={400}
          width={600}
        />
        <h1 className={styles.title}>Made in Soul</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
