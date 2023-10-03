import LoginWith from "../../Components/LoginWithG_F/LoginWith";


const RightSideNav = () => {
  return (
    <div>
      {/* login types  */}
      <div>
        <p className="font-extrabold mb-3">Login With</p>
        <LoginWith></LoginWith>
      </div>
    </div>
  );
};

export default RightSideNav;
