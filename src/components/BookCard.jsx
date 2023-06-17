/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { booksConstants, shelves } from "../constants/books-constants";
import { useBook } from "../main";

export const BookCard = ({ book }) => {
  const { setBooks } = useBook();
  const { _id, id, title, author, genres, coverImg, shelf } = book;
  const { UPDATE_SHELF } = booksConstants;
  const dropDownOptions = Object.values(shelves);

  return (
    <li
      key={id}
      className="mx-1 my-2 flex h-96 w-52 flex-col overflow-hidden rounded shadow-xl "
    >
      <div className="h-3/4 ">
        <img
          className="h-full w-full object-cover"
          src={coverImg}
          alt={title}
        />
      </div>
      <div className="flex h-1/4 flex-col justify-evenly">
        <div className="mx-2">
          <p className="line-clamp-1 text-lg font-bold">{title}</p>
          <p>{author}</p>
        </div>
        <select
          className="mx-1 hover:cursor-pointer"
          name="dropdown"
          onChange={(e) =>
            setBooks({
              type: UPDATE_SHELF,
              payload: { item: book, value: e.target.value },
            })
          }
        >
          {dropDownOptions?.map((dropDownOption, index) => {
            return Object.keys(shelves)[index] === shelf ? (
              <option
                key={dropDownOption}
                value={Object.keys(shelves)[index]}
                selected
              >
                {dropDownOption}
              </option>
            ) : (
              <option key={dropDownOption} value={Object.keys(shelves)[index]}>
                {dropDownOption}
              </option>
            );
          })}
        </select>
      </div>
    </li>
  );
};
