import express from "express";
import { getBooks } from "./functions/get-books.js";
import { getBooksCovers } from "./functions/get-book-cover.js";
import { getCategories } from "./functions/get-categories.js";

const app = express();
const port = 3000;
const backendURL = "http://localhost:3001/";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    const { data: books } = await getBooks(backendURL);
    const booksCoversUrls = getBooksCovers(books);
    const { data: categories } = await getCategories(backendURL);

    res.render("index.ejs", {
        books: books,
        booksCoversUrls: booksCoversUrls,
        categories: categories,
    });
});

app.get("/new-book", async (req, res) => {
    const { data: categories } = await getCategories(backendURL);
    res.render("newBook.ejs", { categories: categories });
});

app.listen(port, () => {
    console.log(`Book Notes Web running on port ${port}`);
});
