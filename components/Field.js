import styles from "./Field.module.css";

export default function Field({ name, placeholder, value, onChange }) {
    return <input className={styles.field} type="text" placeholder={placeholder} name={name} value={value} onChange={(e) => onChange(e)} />;
}
