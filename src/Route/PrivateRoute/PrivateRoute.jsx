import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../Components/Hooks/useAuthContext";
import { Vortex } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center min-h-[30vh] items-center">
        {" "}
        <div>
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </div>
      </div>
    );
  }
  if (!user?.accessToken) {
    return <Navigate to={"/login"} state={location?.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
