import path from "path";
import fs from "fs";
import crypto from "crypto";

export default function handler(req, res) {
    const blogs = JSON.parse(fs.readFileSync(path.resolve("db.json"), { encoding: "utf-8" }));

    if (req.method === "GET") return res.status(200).json(blogs);

    if (req.method === "POST") {
        const id = crypto.randomBytes(12).toString("hex");
        blogs.push({ ...req.body, id });
        fs.writeFileSync(path.resolve("db.json"), JSON.stringify(blogs, null, 4));
        return res.status(201).json({ message: "Success" });
    }
    res.status(400).json({ message: "Bad Request" });
}
