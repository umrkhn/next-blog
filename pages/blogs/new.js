import BlogForm from "../../components/forms/BlogForm";
import styles from "../../styles/BlogNew.module.css";
export default function BlogNew() {
    return (
        <div>
            <h2 className={styles.title}>Write a new blog :</h2>
            <BlogForm />
        </div>
    );
}

// incremental static generation
// serverside props
// typescript
