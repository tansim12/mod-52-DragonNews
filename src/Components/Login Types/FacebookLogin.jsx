import { BsFacebook } from "react-icons/bs";

const FacebookLogin = () => {
  return (
    <div className="flex justify-center border p-2 border-blue-500 rounded-md">
      <div className="flex items-center gap-3">
        <BsFacebook className="text-2xl text-blue-500"></BsFacebook>
        <span className="font-semibold">Login With Facebook</span>
      </div>
    </div>
  );
};

export default FacebookLogin;
