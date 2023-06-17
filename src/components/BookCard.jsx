export const BookCard = ({ book }) => {
  const { _id, id, title, author, genres, coverImg, shelf } = book;

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
      <div className="mx-2 flex h-1/4 flex-col justify-center">
        <p className="line-clamp-2 text-lg font-bold">{title}</p>
        <p>{author}</p>
      </div>
    </li>
  );
};
