import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className=" max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-5 my-5">
      <Outlet></Outlet>
      <Toaster />
    </div>
  );
};

export default Root;
