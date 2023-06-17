import { books } from "../data/books";
import { booksConstants } from "../constants/books-constants";

const { hi } = booksConstants;

export const booksReducer = (state, action) => {
  switch (action.type) {
    case hi:
      return state;
    default:
      return state;
  }
};

export const initialBooks = {
  allBooks: books,
};
