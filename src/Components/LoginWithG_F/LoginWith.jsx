import toast from "react-hot-toast";
import FacebookLogin from "../../Components/Login Types/FacebookLogin";
import GithubLogin from "../../Components/Login Types/GithubLogin";
import GoogleLogin from "../../Components/Login Types/GoogleLogin";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const LoginWith = () => {
  const navigate = useNavigate();
  const { googleLogin, githubLogin } = useAuthContext();

  const handleLogin = (media) => {
    media()
      .then(() => {
        toast.success("Login Successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <div
        onClick={() => handleLogin(googleLogin)}
        className="hover:cursor-pointer"
      >
        <GoogleLogin></GoogleLogin>
      </div>
      <div className="my-3 hover:cursor-pointer">
        <FacebookLogin></FacebookLogin>
      </div>
      <div
        onClick={() => handleLogin(githubLogin)}
        className="hover:cursor-pointer"
      >
        <GithubLogin></GithubLogin>
      </div>
    </div>
  );
};
export default LoginWith;
