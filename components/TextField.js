import styles from "./TextField.module.css";

export default function TextField({ value, onChange }) {
    return <textarea className={styles.field} name="description" placeholder="Description" value={value} onChange={onChange}></textarea>;
}
