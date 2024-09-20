import express from "express";
import { getBooks } from "./functions/get-books.js";
import { getBooksCovers } from "./functions/get-book-cover.js";

const app = express();
const port = 3000;
const backendURL = "http://localhost:3001/";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    const response = await getBooks(backendURL);
    const books = response.data;
    const booksCoversUrls = getBooksCovers(books);

    res.render("index.ejs", { books: books, booksCoversUrls: booksCoversUrls });
});

app.listen(port, () => {
    console.log(`Book Notes Web running on port ${port}`);
});
