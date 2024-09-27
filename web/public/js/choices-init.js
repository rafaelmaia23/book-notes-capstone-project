const choices = new Choices("#book-categories", {
    removeItemButton: true,
    searchEnabled: true,
    addChoices: true,
    duplicateItemsAllowed: false,
    noResultsText: "No categories found",
    customAddItemText: "Only values with at least 2 letters can be added",
    shouldSort: false,
    addItemFilter: (value) => {
        return value.trim().length > 2;
    },
});
