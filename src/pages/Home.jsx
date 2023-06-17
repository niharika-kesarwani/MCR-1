import { DisplayShelf } from "../components/DisplayShelf";

export const Home = () => {
  const shelves = {
    CURRENTLY_READING: "Currently Reading",
    WANT_TO_READ: "Want to Read",
    READ: "Read",
  };

  return (
    <div>
      <ul>
        {Object.entries(shelves)?.map(([key, value]) => (
          <li key={key} className="my-5">
            <div className="mx-3 my-7 text-3xl font-bold uppercase">
              {value}
            </div>
            <DisplayShelf currentShelf={key} />
          </li>
        ))}
      </ul>
    </div>
  );
};
