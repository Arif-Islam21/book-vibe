import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center flex justify-center items-center flex-col gap-y-2">
      <h2 className="text-4xl font-semibold">404</h2>
      <p>Page Not Found</p>
      <NavLink to={-1}>
        <button className="btn btn-primary">Go Back</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
