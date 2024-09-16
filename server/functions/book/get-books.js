import { pool } from "../../database/db.js";

export const getBooks = async () => {
    try {
        const result = await pool.query(`SELECT * FROM books`);
        const books = result.rows;
        return books;
    } catch (err) {
        console.error("Error to fetch books from db: ", err);
    }
};
