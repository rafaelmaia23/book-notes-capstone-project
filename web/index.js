import express from "express";
import { getBooks } from "./functions/get-books";

const app = express();
const port = 3000;
const backendURL = "http://localhost:3001";

db.connect();

app.use(express.static("public"));

app.get("/", async (req, res) => {
    const books = await getBooks();
    console.log(books);

    res.render("index.ejs", {
        name: "nome livro",
        author: "autor",
        rank: 4,
        cover: "#",
        createdDate: "data",
        modifiedDate: "data",
    });
});

app.listen(port, () => {
    console.log(`Book Notes Server running on port #{post}`);
});
