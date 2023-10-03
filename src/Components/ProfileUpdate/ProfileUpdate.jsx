import ProfileUpdateInfo from "./ProfileUpdateInfo";

const ProfileUpdate = () => {
  return (
    <div className="mt-3">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn  drawer-button  bg-gray-200 btn-outline my-3 w-full"
          >
            Profile Update
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-2 sm:p-5 w-56 sm:w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <ProfileUpdateInfo></ProfileUpdateInfo>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
