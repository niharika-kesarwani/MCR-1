/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useReducer } from "react";
import { booksReducer, initialBooks } from "../reducers/books-reducer";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useReducer(booksReducer, initialBooks);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => useContext(BookContext);
