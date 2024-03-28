import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const books = useLoaderData();
  const BookId = useParams();
  const { id } = BookId;
  const bookDetails = books?.find((book) => book.bookId === parseInt(id));
  const {
    bookName,
    author,
    category,
    image,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = bookDetails;
  const handleWishlistAdd = () => {
    const savedToWishlist =
      JSON.parse(localStorage.getItem("wishlistBook")) || [];
    const isWishlistExist = savedToWishlist.find(
      (item) => item.bookId == bookDetails.bookId
    );
    const savedToReadInfo =
      JSON.parse(localStorage.getItem("readingBook")) || [];
    const isExist = savedToReadInfo.find(
      (item) => item.bookId == bookDetails.bookId
    );
    if (isExist) {
      toast("Please chose another One. This book been readed");
    } else if (isWishlistExist) {
      toast("This item has added to wishlist previously");
    } else {
      savedToReadInfo.push(bookDetails);
      const setWishlist = JSON.stringify(savedToReadInfo);
      localStorage.setItem("wishlistBook", setWishlist);
    }
  };
  const handleSaveData = () => {
    const savedData = JSON.parse(localStorage.getItem("readingBook")) || [];
    const isExist = savedData.find((item) => item.bookId == bookDetails.bookId);
    if (isExist) {
      toast("You Have done reading this book");
    } else {
      savedData.push(bookDetails);
      const setBookValue = JSON.stringify(savedData);
      localStorage.setItem("readingBook", setBookValue);
    }
  };
  return (
    <div>
      <section className=" container mx-auto">
        <div className="hero min-h-screen ">
          <div className="hero-content  flex-col lg:flex-row">
            <div className="w-1/2 bg-base-200 py-36 flex min-h-full justify-center items-center">
              <img src={image} className="max-w-sm rounded-lg shadow-xl" />
            </div>
            <div className="w-1/2 pl-6">
              <h2 className="text-xl lg:text-4xl font-semibold">{bookName}</h2>
              <h5 className="text-md font-medium my-3">By:{author}</h5>
              <hr />
              <h4 className="my-3 font-medium">{category}</h4>
              <hr />
              <h5 className="font-medium text-md my-3 text-gray-500">
                <span className="text-xl text-black">Review : </span>
                {review}
              </h5>
              <hr />
              <div className="flex flex-col my-4 lg:flex-row items-center text-start ">
                <p className="font-semibold  text-gray-400 w-full lg:w-1/2">
                  Number Of Pages:
                </p>
                <p className="font-semibold w-1/2 text-black">{totalPages}</p>
              </div>
              <div className="flex flex-col my-4 lg:flex-row items-center text-start ">
                <p className="font-semibold  text-gray-400 w-full lg:w-1/2">
                  Publisher:
                </p>
                <p className="font-semibold w-1/2 text-black">{publisher}</p>
              </div>
              <div className="flex flex-col my-4 lg:flex-row items-center text-start ">
                <p className="font-semibold  text-gray-400 w-full lg:w-1/2">
                  Year Of Publication
                </p>
                <p className="font-semibold w-1/2 text-black">
                  {yearOfPublishing}
                </p>
              </div>
              <div className="flex items-center my-3">
                <p className="text-gray-400 font-semibold w-1/2 ">Rating</p>
                <p className=" text-black font-semibold w-1/2">{rating}</p>
              </div>

              <div className="my-4 space-y-4 lg:space-y-0 justify-center flex items-center flex-col lg:flex-row">
                <button
                  onClick={handleSaveData}
                  className="btn btn-outline mr-4 font-bold btn-info"
                >
                  Read
                </button>

                <button
                  onClick={handleWishlistAdd}
                  className="btn btn-outline font-bold btn-info"
                >
                  WishList
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BookDetails;
