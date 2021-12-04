import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/blogs">
                    <a className={styles.logo}>Blog</a>
                </Link>
                <Link href="/blogs/new">
                    <a className="primary-btn primary-btn--outline">new post</a>
                </Link>
            </div>
        </nav>
    );
}
