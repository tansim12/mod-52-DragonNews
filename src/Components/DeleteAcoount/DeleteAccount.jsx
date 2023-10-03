import toast from "react-hot-toast";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const navigate = useNavigate();
  const { deleteAccount } = useAuthContext();
  // handleAccountDelete
  const handleAccountDelete = () => {
    const isDelete = confirm("Are you sure you Want to delete this Account ?");
    deleteAccount()
      .then(() => {
        if (isDelete) {
          toast.success("Your Account has been deleted successfully.", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      })
      .catch(() => {
        const reLoggedIn = confirm("Please reLogin and Deleted this account");
        {
          reLoggedIn && navigate("/login");
        }
      });
  };
  return (
    <div className="mt-3">
      <button
        onClick={handleAccountDelete}
        className="btn bg-gray-200 btn-outline my-3 w-full"
      >
        Delete Account
      </button>
    </div>
  );
};

export default DeleteAccount;
