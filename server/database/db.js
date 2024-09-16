import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "BookNotes",
    password: "postgres1234",
    port: 5432,
});
