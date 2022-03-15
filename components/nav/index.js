import styles from '../../styles/Home.module.css'
import Link from "next/link";

export default function Nav(){
    const floatRight = {
        float: 'right',
    };
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/register"><a>Registrate</a></Link>
                    </li>
                    <li>
                        <Link href="/login"><a>Login</a></Link>
                    </li>
                    <li >
                        <Link href="/gallery"><a>Galeria</a></Link>
                    </li>
                    <li style={floatRight}>
                        <Link href="/gallery"><a>Log out</a></Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

