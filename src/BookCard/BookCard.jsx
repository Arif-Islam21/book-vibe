import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const BookCard = ({ book }) => {
  const { bookId, image, author, bookName, tags, category, rating } = book;
  console.log(book);
  return (
    <NavLink to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 shadow-xl">
        <div className="card h-[70vh] bg-base-100 shadow-xl">
          <figure className="bg-gray-200 shadow-2xl py-4">
            <img className="h-[30vh]" src={image} alt={category} />
          </figure>
          <div className="card-body">
            <div className="flex gap-2 justify-around">
              {tags.map((tag, idx) => (
                <h4
                  className=" border-none px-3 py-1 rounded-full text-green-700 font-medium bg-green-100"
                  key={idx}
                >
                  {tag}
                </h4>
              ))}
            </div>
            <h4 className="text-2xl font-medium">{bookName}</h4>
            <p className="text-gray-400 font-medium">By: {author}</p>
            <div className="border-b-2 border-dashed"></div>
            <div className="flex justify-between">
              <h4>{category}</h4>
              <h4 className="flex gap-2 items-center text-center text-gray-600 font-medium">
                {rating}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
BookCard.propTypes = {
  book: PropTypes.object,
};
export default BookCard;
