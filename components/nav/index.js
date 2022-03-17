import styles from '../../styles/Home.module.css'
import Link from "next/link";
import { useRouter } from 'next/router';
import Button from '../Button';
import { logout } from '../login';

export default function Nav(){
    const floatRight = {
        float: 'right',
    };

    const router = useRouter();

    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={router.pathname === '/'? styles.active : ''}>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li className={router.pathname === '/register'? styles.active : ''}>
                    <Link href="/register"><a>Registrate</a></Link>
                </li>
                <li className={router.pathname === '/login'? styles.active : ''}>
                    <Link href="/login"><a>Login</a></Link>
                </li>
                <li className={router.pathname === '/gallery'? styles.active : ''}>
                    <Link href="/gallery"><a>Galeria</a></Link>
                </li>
                <a href='/' className={{floatRight}}>
                    <li >
                        <Button 
                            style="" 
                            onClick={ logout } 
                            label="Sign Out"
                        />
                    </li>
                </a>
            </ul>
        </nav>
    )
}

