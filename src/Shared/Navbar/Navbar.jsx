import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Components/Hooks/useAuthContext";
import toast from "react-hot-toast";
import Avater from "../../Components/Avater/Avater";

const Navbar = () => {
  const { user, logOut } = useAuthContext();
  const navigate = useNavigate();
  const navArray = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Dashboard", path: "/dashboard" },
  ];
  const links = navArray.map((item) => (
    <NavLink
      className={({ isActive, isPending }) =>
        isActive
          ? "bg-secondary p-3 text-white btn "
          : isPending
          ? "pending"
          : "p-3"
      }
      to={item?.path}
      key={item.id}
    >
      {item?.name}
    </NavLink>
  ));

  // handleLogOut
  const handleLogOut = () => {
    const isSure = confirm("Do you want Log Out your Account");

    isSure &&
      logOut()
        .then(() => {
          toast.success("Log Out Successfully", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          navigate("/");
        })
        .catch((err) => {
          toast.error(err.message);
        });
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 my-2"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-5">
          <div>
            {user?.accessToken ? (
              <Avater></Avater>
            ) : (
              <img
                className="w-12 "
                src={user?.accessToken || "https://i.ibb.co/g7M9RgF/user.png"}
                alt=""
              />
            )}
          </div>
          <div>
            {user?.accessToken ? (
              <button onClick={handleLogOut} className="btn btn-secondary">
                Log out
              </button>
            ) : (
              <Link to={"/login"} className="btn btn-neutral">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
