import { Outlet } from "react-router-dom";
import Navbar from "../Navbrar/Navbar";

const RootFIle = () => {
  return (
    <div>
      <div className="h-20">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default RootFIle;
