import { Link, useLoaderData, useParams } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Logo from "../Shared/Logo/Logo";

const NewsSingleDetails = () => {
  const data = useLoaderData();

  const { _id } = useParams();
  const findNews = data.find((item) => item?._id === _id);
  const { image_url, title, details } = findNews;

  return (
    <div>
      <Logo></Logo>
      <div className="grid grid-cols-1  lg:grid-cols-4 gap-5 my-10">
        {/* details div  */}
        <div className="col-span-3">
          <div>
            <img src={image_url} alt="" />
          </div>
          {/* title  */}
          <p className="my-4 font-extrabold text-2xl">{title}</p>
          {/* details  */}
          <p className="my-3 font-medium">{details}</p>
          <Link to={"/"} className="btn btn-secondary">
            {" "}
            👈🏿 All news in this category
          </Link>
        </div>

        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsSingleDetails;
