/* eslint-disable react/prop-types */
import { useBook } from "../main";
import { BookCard } from "./BookCard";

export const DisplayShelf = ({ currentShelf }) => {
  const {
    books: { allBooks },
  } = useBook();

  const shelfBooks = allBooks?.filter(({ shelf }) => currentShelf === shelf);

  return (
    <div>
      <ul className="mb-2 mt-5 flex flex-wrap gap-x-16 overflow-x-auto">
        {shelfBooks?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};
