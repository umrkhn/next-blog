import Link from "next/link";
import styles from "./PrimaryBtn.module.css";

const PrimaryBtn = ({ path, text }) => {
    return (
        <Link href={path}>
            <a className={styles.PrimaryBtn}>{text}</a>
        </Link>
    );
};

export default PrimaryBtn;
