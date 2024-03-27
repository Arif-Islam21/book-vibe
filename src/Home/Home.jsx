import { useEffect, useState } from "react";
import Header from "../Header/Header";
import BookCard from "../BookCard/BookCard";

const Home = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetch("./Book.json")
      .then((res) => res.json())
      .then((data) => setBookData(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <h2 className="text-center text-4xl font-semibold my-8">Books</h2>
      <div className="container mx-auto grid grid-cols-1 gap-4 my-12 lg:grid-cols-3">
        {bookData.map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
