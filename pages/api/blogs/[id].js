import blogs from "../../../data";

export default function handler(req, res) {
    const { id } = req.query;
    const blog = blogs.find((el) => id === el.id);
    res.status(200).json(blog);
}
