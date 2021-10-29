import BlogCard from "../../components/cards/BlogCard";
import styles from "../../styles/BlogList.module.css";

export default function BlogList({ blogs }) {
    const renderBlogCard = () => blogs.map((blog) => <BlogCard {...blog} key={blog.id} />);
    return <div className={styles.BlogList}>{renderBlogCard()}</div>;
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/blogs");
    const blogs = await res.json();
    return {
        props: {
            blogs,
        },
    };
}
