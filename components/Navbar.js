import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <Link href="/">
                <a className={styles.Navbar__logo}>Blog</a>
            </Link>
        </nav>
    );
}
