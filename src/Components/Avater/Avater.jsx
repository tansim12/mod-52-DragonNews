import DeleteAccount from "../DeleteAcoount/DeleteAccount";
import EmailVerification from "../EmailVerification/EmailVerification";
import { useAuthContext } from "../Hooks/useAuthContext";
import PrivacyAndSettings from "../PrivacyAndSettings/PrivacyAndSettings";
import ProfileUpdate from "../ProfileUpdate/ProfileUpdate";

const Avater = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <div className="avatar active hover:cursor-pointer">
        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}{" "}
          <img
            onClick={() => document.getElementById("my_modal_4").showModal()}
            src={user?.photoURL}
          />
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box md:w-[50%] max-w-5xl">
              <div className="flex items-center gap-5">
                {/* avatar  */}
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                {/* name  */}
                <p className="font-bold">{user?.displayName || "Author"}</p>
              </div>
              <ProfileUpdate></ProfileUpdate>
              <PrivacyAndSettings></PrivacyAndSettings>
              <DeleteAccount></DeleteAccount>
              <EmailVerification></EmailVerification>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn btn-accent">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Avater;
