import { pool } from "../../database/db.js";

export const getCategories = async () => {
    try {
        const result = await pool.query(`SELECT * FROM categories`);
        const categories = result.rows;
        return categories;
    } catch (err) {
        console.error("Error to fetch categories from db: ", err);
    }
};
