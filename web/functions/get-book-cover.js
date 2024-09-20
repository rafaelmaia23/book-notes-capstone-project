export const getBooksCovers = (books) => {
    const baseUrl = "https://covers.openlibrary.org/b/isbn/";
    const urlSuffix = "-M.jpg";
    const booksCoversUrls = [];

    if (!Array.isArray(books)) {
        console.error("Books não é um array", books);
        return;
    }

    for (const book of books) {
        const url = `${baseUrl}${book.isbn}${urlSuffix}`;
        booksCoversUrls.push(url);
    }

    return booksCoversUrls;
};
