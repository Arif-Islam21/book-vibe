import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const BookData = books?.find((book) => book.bookId === parseInt(bookId));
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
  } = books;
  console.log(books);
  const handleSaveData = () => {
    const savedData = JSON.parse(localStorage.getItem("bookReadInfo")) || [];
    const isExist = savedData.find((item) => item.bookId == BookData.bookId);
    if (isExist) {
      toast("You already have this data");
    } else {
      savedData.push(BookData);
      const setBookValue = JSON.stringify(savedData);
      localStorage.setItem("bookReadInfo", setBookValue);
    }
  };

  const handleWishlist = () => {
    const savedToWishlist =
      JSON.parse(localStorage.getItem("wishlistInfo")) || [];
    const isWishlistExist = savedToWishlist.find(
      (item) => item.bookId == BookData.bookId
    );
    const savedToReadInfo =
      JSON.parse(localStorage.getItem("bookReadInfo")) || [];
    const isExist = savedToReadInfo.find(
      (item) => item.bookId == BookData.bookId
    );
    if (isExist) {
      toast("You Had Read this one. Please chose another");
    } else if (isWishlistExist) {
      toast("You have this item added to wishlist");
    } else {
      savedToReadInfo.push(BookData);
      const setWishlist = JSON.stringify(savedToReadInfo);
      localStorage.setItem("wishlistInfo", setWishlist);
    }
  };

  return (
    <div>
      <section className=" container mx-auto my-12">
        <div className="hero min-h-[85vh] ">
          <div className="hero-content  flex-col lg:flex-row">
            <div className="w-1/2 bg-base-200 py-36 flex min-h-full justify-center items-center">
              <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
            </div>
            <div className="w-1/2 pl-8">
              <h1 className="text-2xl lg:text-5xl font-bold">{bookName}</h1>
              <p className="text-md font-medium my-3">By:{author}</p>
              <hr />
              <p className="my-3 font-medium">{category}</p>
              <hr />
              <p className="font-medium text-md my-3 text-gray-500">
                <span className="text-xl text-black font-bold">Review : </span>
                {review}
              </p>
              <p className="flex flex-col lg:flex-row gap-4 items-center my-3">
                {/* <span className="text-xl font-bold">Tag:</span>
                <span className="flex gap-3">
                  
                </span> */}
              </p>
              <hr />
              <div className="flex flex-col lg:flex-row items-center text-start my-3">
                <p className="font-semibold w-full lg:w-1/2 text-gray-500">
                  Number Of Pages:
                </p>
                <p className="font-semibold w-1/2 text-black">{totalPages}</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center my-3">
                <p className="font-semibold w-1/2 text-gray-500">Publisher:</p>
                <p className="font-semibold w-1/2 text-black">{publisher}</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center  my-3">
                <p className="font-semibold w-1/2 text-gray-500">
                  Year Of Publication
                </p>
                <p className="font-semibold w-1/2 text-black">
                  {yearOfPublishing}
                </p>
              </div>
              <div className="flex items-center my-3">
                <p className="font-semibold w-1/2 text-gray-500">Rating</p>
                <p className="font-semibold w-1/2 text-black">{rating}</p>
              </div>

              <div className="my-4 space-y-4 lg:space-y-0 justify-center flex items-center flex-col lg:flex-row">
                <button
                  onClick={handleSaveData}
                  className="btn btn-outline mr-4 font-bold btn-info"
                >
                  Read
                </button>

                <button
                  onClick={handleWishlist}
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
