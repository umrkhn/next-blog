import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <main className={styles.main}>Index Page</main>
        </div>
    );
}
