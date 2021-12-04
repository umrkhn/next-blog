import { useState } from "react";
import { useRouter } from "next/router";
import Field from "../Field";
import TextField from "../TextField";
import styles from "./BlogForm.module.css";

const initialState = {
    title: "",
    image: "",
    description: "",
};

export default function BlogForm() {
    const [formValues, setFormValues] = useState(initialState);
    const { title, image, description } = formValues;
    const router = useRouter();
    const onChange = (e) => setFormValues({ ...formValues, [e.target.name]: e.target.value });
    const onSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3000/api/blogs", { method: "POST", body: JSON.stringify(formValues), headers: { "Content-Type": "application/json" } });
        router.push("/blogs");
    };
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <Field name="title" placeholder="Enter Title" value={title} onChange={onChange} />
            <Field name="image" placeholder="Image Url" value={image} onChange={onChange} />
            <TextField value={description} onChange={onChange} />
            <button className="primary-btn">submit</button>
        </form>
    );
}
