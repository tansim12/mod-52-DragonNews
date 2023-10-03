import toast from "react-hot-toast";
import { useAuthContext } from "../Hooks/useAuthContext";
import swal from "sweetalert";

const EmailVerification = () => {
  const { emailVerification } = useAuthContext();
  // handleEmailVerification
  const handleEmailVerification = () => {
    emailVerification()
      .then(() => {
        swal("Good job!", "You clicked the button!", "success");

        toast.success("Please check your email");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="mt-3">
      <button
        onClick={handleEmailVerification}
        className="btn bg-gray-200 btn-outline my-3 w-full"
      >
        Verify Your Account
      </button>
    </div>
  );
};

export default EmailVerification;
