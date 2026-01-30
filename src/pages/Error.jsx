import { Link } from "react-router";
import error from "../assets/images/error.jpg";

const Error = () => {
  return (
    <section className=" min-h-screen">
      <div className=" min-h-screen flex flex-col justify-center items-center">
        <img src={error} alt="not found" className=" max-w-[600px]" />
        <h3 className=" text-lg font-semibold text-error-dark">
          Page Not Found !!!
        </h3>
        <Link
          to={"/"}
          className=" bg-secondary px-6 py-4 font-bold inline-block my-2 rounded-full shadow-2xl text-white hover:bg-secondary-dark transition-all duration-500"
        >
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
