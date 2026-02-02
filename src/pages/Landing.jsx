import { Link } from "react-router";
import hero from "../assets/images/hero.jpg";
import Logo from "../components/Logo";

const Landing = () => {
  return (
    <section className=" px-6 md:px-8 lg:px-16 h-screen py-8 bg-surface-alt">
      <nav className=" w-full mb-4 flex justify-center items-center lg:justify-start">
        <Logo />
      </nav>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="">
          <h1 className=" font-bold text-4xl md:text-5xl lg:text-6xl">
            Job <span className=" text-primary">Tracking</span> App
          </h1>
          <p className=" text-content font-medium lg:text-lg py-4 text-justify">
            A Job Application Tracker built to manage job applications
            efficiently, allowing users to track company info, application
            status, and updates through a clean, user-friendly interface.
          </p>
          <Link
            to={"/register"}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all duration-300 lg:text-lg my-2"
          >
            Login/Register
          </Link>
        </div>
        <img
          src={hero}
          alt=""
          className="block w-full max-w-xl lg:max-w-2xl py-2"
        />
      </div>
    </section>
  );
};

export default Landing;
