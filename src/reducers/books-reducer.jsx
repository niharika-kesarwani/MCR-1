/* eslint-disable no-case-declarations */
import { books } from "../data/books";
import { booksConstants } from "../constants/books-constants";

const { UPDATE_SHELF, SEARCH_INPUT, EMPTY_SEARCH_RESULTS } = booksConstants;

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
    case SEARCH_INPUT:
      return {
        ...state,
        searchedBooks:
          action.payload === ""
            ? []
            : state?.allBooks?.filter(({ title }) =>
                title.toLowerCase().includes(action.payload.toLowerCase())
              ),
      };
    case EMPTY_SEARCH_RESULTS:
      return { ...state, searchedBooks: [] };
    default:
      return state;
  }
};

export const initialBooks = {
  allBooks: books,
  searchedBooks: [],
};
