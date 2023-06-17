/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { shelves } from "../constants/books-constants";

export const BookCard = ({ book }) => {
  const { _id, id, title, author, genres, coverImg, shelf } = book;
  const dropDownOptions = [...Object.values(shelves), "None"];

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
        <select className="mx-1" name="dropdown">
          {dropDownOptions?.map((dropDownOption, index) => {
            return Object.keys(shelves)[index] === shelf ? (
              <option key={dropDownOption} selected>
                {dropDownOption}
              </option>
            ) : (
              <option key={dropDownOption}>{dropDownOption}</option>
            );
          })}
        </select>
      </div>
    </li>
  );
};
