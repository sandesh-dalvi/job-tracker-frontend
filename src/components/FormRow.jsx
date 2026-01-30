import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  showPassword,
  setShowPassword,
}) => {
  if (name === "password") {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="••••••••"
            value={value}
            onChange={handleChange}
            name="password"
            // required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <IoIosEyeOff className="h-5 w-5 text-primary hover:text-primary-dark" />
            ) : (
              <IoIosEye className="h-5 w-5 text-primary hover:text-primary-dark" />
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <label
        htmlFor={name}
        className=" block text-sm font-medium text-content mb-2"
      >
        {labelText}
      </label>
      <div className=" relative">
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          //   required
          className="block w-full p-2 border border-border rounded-lg"
        />
      </div>
    </div>
  );
};

export default FormRow;
