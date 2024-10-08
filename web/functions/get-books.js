import axios from "axios";

export const getBooks = async (url) => {
    try {
        const response = await axios.get(`${url}books`);
        return response;
    } catch (err) {
        console.error(`Erro from query get books: `, err);
    }
};
