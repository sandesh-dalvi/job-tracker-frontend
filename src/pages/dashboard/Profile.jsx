import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

import FormRow from "../../components/FormRow";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    location: user?.location || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, lastName, email, location } = userData;

    if (!name || !lastName || !email || !location) {
      toast.error("Please fill in all fields");
      return;
    }

    dispatch(updateUser({ name, lastName, email, location }));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className=" rounded-3xl w-full bg-surface px-16 py-8 shadow-2xl">
      <form onSubmit={handleSubmit} className=" m-0 max-w-full w-full p-0">
        <h3 className=" mt-0 text-xl md:text-2xl lg:text-4xl mb-4">Profile</h3>

        <div className=" grid gap-2 md:grid-cols-2 md:items-center lg:grid-cols-3">
          <FormRow
            type={"text"}
            name={"name"}
            value={userData.name}
            labelText={"Name"}
            handleChange={handleChange}
          />
          <FormRow
            type={"text"}
            name={"lastName"}
            value={userData.lastName}
            labelText={"Last Name"}
            handleChange={handleChange}
          />
          <FormRow
            type={"email"}
            name={"email"}
            value={userData.email}
            labelText={"Email"}
            handleChange={handleChange}
          />
          <FormRow
            type={"text"}
            name={"location"}
            value={userData.location}
            labelText={"Location"}
            handleChange={handleChange}
          />
          <div className=" flex items-end h-full">
            <button
              type="submit"
              className="cursor-pointer w-full bg-primary text-surface py-3 px-4 rounded-lg font-medium hover:bg-primary-dark focus:ring-4 focus:ring-primary-light transition-all shadow-lg shadow-primary/30"
              disabled={isLoading}
            >
              {isLoading ? "Please wait..." : "Save Changes"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
