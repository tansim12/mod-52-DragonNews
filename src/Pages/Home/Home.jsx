import BrakingNewsMarquee from "../../Components/BrakingNewsMarquee/BrakingNewsMarquee";
import MiddleSideNews from "../../Components/MiddleSideNews/MiddleSideNews";

import Logo from "../../Shared/Logo/Logo";
import Navbar from "../../Shared/Navbar/Navbar";
import LeftSideNav from "../../Shared/RightSideNav/LeftSideNav";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Logo></Logo>
      <div className="my-5">
        <BrakingNewsMarquee></BrakingNewsMarquee>
      </div>
      <Navbar></Navbar>

      {/* LeftSideNav , RightSideNav , MiddleSideNews */}
      <div className="grid grid-cols-1  md:grid-cols-4 gap-5 ">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2  h-[100vh]  overflow-y-scroll ">
          <MiddleSideNews></MiddleSideNews>
        </div>
        <div className=" col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
