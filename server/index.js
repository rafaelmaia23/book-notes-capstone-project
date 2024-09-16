import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getBooks } from "./functions/book/get-books.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/books", async (req, res) => {
    const books = await getBooks();
    res.json(books);
});

app.listen(port, () => {
    console.log(`Book Notes Server running on port ${port}`);
});
