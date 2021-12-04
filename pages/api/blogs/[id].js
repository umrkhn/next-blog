import path from "path";
import fs from "fs";

export default function handler(req, res) {
    const { id } = req.query;
    const blogs = JSON.parse(fs.readFileSync(path.resolve("db.json"), { encoding: "utf-8" }));
    const blog = blogs.find((el) => id === el.id);
    res.status(200).json(blog);
}
