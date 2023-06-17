import { NavLink } from "react-router-dom";
import { DisplayShelf } from "../components/DisplayShelf";
import { shelves } from "../constants/books-constants";

export const Home = () => {
  return (
    <div>
      <NavLink to="/search">
        <button>Search Books</button>
      </NavLink>
      <ul>
        {Object.entries(shelves)
          .slice(0, -1)
          ?.map(([key, value]) => (
            <li key={key} className="my-5">
              <div className="mx-3 mb-5 mt-7 text-3xl font-bold uppercase">
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
