import moment from "moment";
const Logo = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <img src="https://i.ibb.co/Gt5htsj/logo.png" alt="" />
      </div>
      <h2 className="my-4 text-gray-400 font-medium text-xl">
        Journalism Without Fear or Favour
      </h2>
      <p className="text-black font-semibold text text-2xl">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Logo;
