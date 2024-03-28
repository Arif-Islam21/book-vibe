import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="px-12">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6 w-[50vw]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <NavLink to={"/listedBooks"}>
              <button className="btn mx-2">Listed Books</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
