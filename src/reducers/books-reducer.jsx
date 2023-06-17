/* eslint-disable no-case-declarations */
import { books } from "../data/books";
import { booksConstants } from "../constants/books-constants";

const { UPDATE_SHELF } = booksConstants;

export const booksReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SHELF:
      const { item, value } = action.payload;
      return {
        ...state,
        allBooks: state?.allBooks?.map((book) =>
          book?.id === item?.id ? { ...book, shelf: value } : book
        ),
      };
    default:
      return state;
  }
};

export const initialBooks = {
  allBooks: books,
};
