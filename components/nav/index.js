import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../Button';
import {
  getProviders,
  getSession,
  signIn,
  signOut,
  useSession,
} from 'next-auth/react';

export default function Nav() {
  const floatRight = {
    float: 'right',
  };

  const { data: session } = useSession();
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={router.pathname === '/' ? styles.active : ''}>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        {!session && (
          <>
            <li
              className={router.pathname === '/register' ? styles.active : ''}
            >
              <Link href='/register'>
                <a>Registrate</a>
              </Link>
            </li>
            <li className={router.pathname === '/login' ? styles.active : ''}>
              <Link href='/login'>
                <a>Login</a>
              </Link>
            </li>
          </>
        )}

        <li className={router.pathname === '/gallery' ? styles.active : ''}>
          <Link href='/gallery'>
            <a>Galeria</a>
          </Link>
        </li>
        {session && (
          <>
            <li className={styles.active}>{session.user.name}</li>
            <li>
              <Button style='' onClick={signOut} label='Sign Out' />
            </li>
          </>
        )}
        <li className={router.pathname === '/contact' ? styles.active : ''}>
          <Link href='/contact'>
            <a>Contacto</a>
          </Link>
        </li>
        <li className={router.pathname === '/about' ? styles.active : ''}>
          <Link href='/about'>
            <a>Acerca de</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
