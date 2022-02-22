import Navbar from "./Navbar";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className={styles.Layout}>{children}</main>
        </>
    );
}
