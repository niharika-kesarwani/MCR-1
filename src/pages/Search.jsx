import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BookCard } from "../components/BookCard";
import { booksConstants } from "../constants/books-constants";
import { useBook } from "../main";

export const Search = () => {
  const {
    books: { searchedBooks },
    setBooks,
  } = useBook();
  const { SEARCH_INPUT, EMPTY_SEARCH_RESULTS } = booksConstants;

  useEffect(() => {
    setBooks({ type: EMPTY_SEARCH_RESULTS });
  }, []);

  return (
    <div className="my-5 flex w-full flex-col">
      <div className="mx-5 flex flex-col items-center justify-center gap-10 md:flex-row">
        <NavLink to="/">
          <button className="m-auto block w-max rounded border bg-pink-500 p-3 text-xl font-bold hover:scale-110 hover:cursor-pointer hover:bg-pink-400 md:text-3xl">
            Go Back
          </button>
        </NavLink>
        <input
          className="w-full grow border-2 border-black p-5"
          placeholder="Search books here..."
          onChange={(e) =>
            setBooks({ type: SEARCH_INPUT, payload: e.target.value })
          }
        />
      </div>
      <div className="mx-5 my-10 mb-2 mt-5 flex flex-wrap justify-center gap-x-16 ">
        {searchedBooks?.length === 0 ? (
          <p className="text-xl md:text-3xl">No books!...</p>
        ) : (
          searchedBooks?.map((book) => <BookCard key={book.id} book={book} />)
        )}
      </div>
    </div>
  );
};
