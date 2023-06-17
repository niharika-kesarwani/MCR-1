import { NavLink } from "react-router-dom";
import { DisplayShelf } from "../components/DisplayShelf";
import { shelves } from "../constants/books-constants";

export const Home = () => {
  return (
    <div className="w-full">
      <NavLink to="/search">
        <button className="m-auto mt-5 block rounded border bg-pink-500 p-3 text-xl font-bold hover:scale-110 hover:cursor-pointer hover:bg-pink-400 md:text-3xl">
          Search Books
        </button>
      </NavLink>
      <ul>
        {Object.entries(shelves)
          .slice(0, -1)
          ?.map(([key, value]) => (
            <li key={key} className="mx-3 my-5 ">
              <div className="mb-5 mt-7 text-xl font-bold uppercase md:text-3xl">
                {value}
              </div>
              <hr />
              <DisplayShelf currentShelf={key} />
            </li>
          ))}
      </ul>
    </div>
  );
};
