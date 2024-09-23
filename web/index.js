import express from "express";
import { getBooks } from "./functions/get-books.js";
import { getBooksCovers } from "./functions/get-book-cover.js";
import { getCategories } from "./functions/get-categories.js";

const app = express();
const port = 3000;
const backendURL = "http://localhost:3001/";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    const booksResponse = await getBooks(backendURL);
    const books = booksResponse.data;
    const booksCoversUrls = getBooksCovers(books);
    const categoriesResponse = await getCategories(backendURL);
    const categories = categoriesResponse.data;

    res.render("index.ejs", {
        books: books,
        booksCoversUrls: booksCoversUrls,
        categories: categories,
    });
});

app.listen(port, () => {
    console.log(`Book Notes Web running on port ${port}`);
});
