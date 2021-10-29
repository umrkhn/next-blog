import PrimaryBtn from "../buttons/PrimaryBtn";
import styles from "./BlogCard.module.css";

export default function BlogCard({ image, title, description, id }) {
    return (
        <div className={styles.BlogCard}>
            <div className={styles.BlogCard__figure}>
                <img className={styles.BlogCard__image} src={image.src} alt={image.alt} />
            </div>
            <div className={styles.BlogCard__body}>
                <h2 className={styles.BlogCard__title}>{title}</h2>
                <p className={styles.BlogCard__description}>{description}</p>
                <PrimaryBtn path={`/blogs/${id}`} text="details" />
            </div>
        </div>
    );
}
