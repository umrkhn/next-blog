import styles from "../../styles/BlogDetails.module.css";

export default function BlogDetails({ image, title, description }) {
    return (
        <div className={styles.BlogDetails}>
            <img className={styles.BlogDetails__image} src={image.src} alt={image.alt} />
            <h2 className={styles.BlogDetails__title}>{title}</h2>
            <p className={styles.BlogDetails__description}>{description}</p>
        </div>
    );
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/blogs/${params.id}`);
    const blog = await res.json();
    return {
        props: { ...blog },
    };
}

export async function getStaticPaths() {
    const res = await fetch("http://localhost:3000/api/blogs");
    const blogs = await res.json();

    const paths = blogs.map((blog) => {
        return {
            params: { id: blog.id },
        };
    });

    return {
        paths,
        fallback: false,
    };
}
