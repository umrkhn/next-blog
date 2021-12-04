import Link from "next/link";
import styles from "./BlogCard.module.css";

export default function BlogCard({ image, title, description, id }) {
    return (
        <div className={styles.card}>
            <div className={styles.figure}>
                <img className={styles.image} src={image} alt="post" />
            </div>
            <div className={styles.body}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description.slice(0, 150)}...</p>
                <Link href={`/blogs/${id}`}>
                    <a className="primary-btn">details</a>
                </Link>
            </div>
        </div>
    );
}
