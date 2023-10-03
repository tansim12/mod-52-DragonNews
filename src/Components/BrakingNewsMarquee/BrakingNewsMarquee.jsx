import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BrakingNewsMarquee = () => {
  return (
    <div className="bg-gray-200 text-black p-3 rounded-lg font-semibold  flex">
      <div className="text-white bg-secondary  px-4 py-2 ">Latest</div>
      <Marquee speed={100} className="flex gap-20">
        <Link to={"/"}>Lorem ipsum dolor, sit amet elit. , reiciendis!</Link>
        <Link to={"/"}>Lorem sit amet c adipisicing elit. Laborum, !</Link>
        <Link to={"/"}>Lorem ipsum dolor, sit  adipisicing elit. Laborum, reiciendis!</Link>
      </Marquee>
    </div>
  );
};

export default BrakingNewsMarquee;
