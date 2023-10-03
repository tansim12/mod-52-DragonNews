import toast from "react-hot-toast";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useState } from "react";

const ProfileUpdateInfo = () => {
    const { profileUpdate } = useAuthContext();
const [success , setSuccess] = useState(null)

  //  handleProfileUpdate
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const img = e.target.img.value;
   
    profileUpdate(name, img)
      .then(() => {
        toast.success("Profile Updated Complete ");
        setSuccess("Profile Updated Complete ")
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <p className="text-black font-extrabold text-xl my-3">Update Info</p>
      <form onSubmit={handleProfileUpdate}>
        <input
          type="text"
          name="name"
          required
          className="bg-gray-300 text-black rounded-lg p-4"
          placeholder="Name ..."
          id=""
        />
        <input
          type="url"
          name="img"
          className="bg-gray-300 text-black rounded-lg p-4 my-3"
          placeholder="Photo Url ..."
          id=""
        />
        <br />
        <p className="text-green-600 font-semibold">{success}</p>

        <button type="submit" className="btn btn-sm btn-accent">
          Update Now
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdateInfo;
