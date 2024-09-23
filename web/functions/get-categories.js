import axios from "axios";

export const getCategories = async (url) => {
    try {
        const response = await axios.get(`${url}categories`);
        return response;
    } catch (err) {
        console.error(`Erro from query get categories: `, err);
    }
};
