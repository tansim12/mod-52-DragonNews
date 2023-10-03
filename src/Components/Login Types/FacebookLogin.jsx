import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { BsFacebook } from "react-icons/bs";
import { auth } from "../../Firebase/FirebaseConfig";
import toast from "react-hot-toast";
const FacebookLogin = () => {
  // handleFacebook
  const facebookProvider = new FacebookAuthProvider();
  const handleFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((res) => {
        const result = res.user;
        console.log(result);
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log(accessToken);
      })
      .catch((err) => toast(err.message));
  };
  return (
    <div
      onClick={handleFacebook}
      className="flex justify-center border p-2 border-blue-500 rounded-md"
    >
      <div className="flex items-center gap-3">
        <BsFacebook className="text-2xl text-blue-500"></BsFacebook>
        <span className="font-semibold">Login With Facebook</span>
      </div>
    </div>
  );
};

export default FacebookLogin;
