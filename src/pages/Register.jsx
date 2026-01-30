import { useEffect, useState } from "react";
import Logo from "../components/Logo";

import FormRow from "../components/FormRow";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router";

//
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [values, setValues] = useState(initialState);

  const { user, isLoading } = useSelector((store) => store.user);
  //
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //toggle login/register
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields");
    }

    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }

    dispatch(registerUser({ name, email, password }));
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, navigate]);

  return (
    <section className=" min-h-screen bg-surface-alt flex flex-col items-center justify-center p-4">
      <div className=" text-center mb-4">
        <div className=" flex justify-center items-center mb-6">
          <Logo />
        </div>
        <h1 className=" text-2xl md:text-3xl font-bold text-content">
          Job Tracker
        </h1>
        <p className=" text-content-alt mt-2">
          {values.isMember ? "Sign in to your account" : "Sign up for free"}
        </p>
      </div>

      <div className=" bg-surface rounded-2xl shadow-xl border border-border p-8">
        <form onSubmit={handleSubmit} className=" space-y-6">
          {/* name */}
          {!values.isMember && (
            <FormRow
              type={"text"}
              name={"name"}
              value={values.name}
              labelText={"Name"}
              handleChange={handleChange}
            />
          )}
          {/* email */}
          <FormRow
            type={"email"}
            name={"email"}
            value={values.email}
            labelText={"Email"}
            handleChange={handleChange}
          />
          {/* password */}
          <FormRow
            name={"password"}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            handleChange={handleChange}
            value={values.password}
          />
          <div className=" flex flex-col gap-4">
            <button
              type="submit"
              className="w-full cursor-pointer bg-primary text-surface py-3 px-4 rounded-lg font-medium hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
            <button
              type="button"
              className="w-full cursor-pointer bg-primary-light/50 text-primary-dark py-3 px-4 rounded-lg font-medium hover:bg-primary-light hover:text-surface transition-all duration-300 shadow-lg shadow-primary/30"
              disabled={isLoading}
              onClick={() =>
                dispatch(
                  loginUser({
                    email: "demoUser@test.com",
                    password: "secretUser",
                  })
                )
              }
            >
              {isLoading ? "Loading..." : "Demo User"}
            </button>
          </div>
        </form>
        <div className="relative my-6">
          <div className="flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <p className="text-center mt-6 text-gray-600">
            {values.isMember ? "Don't have an account?" : "Already a member?"}{" "}
            <button
              type="button"
              onClick={toggleMember}
              className="font-medium cursor-pointer text-primary hover:text-primary-dark"
            >
              {values.isMember ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
