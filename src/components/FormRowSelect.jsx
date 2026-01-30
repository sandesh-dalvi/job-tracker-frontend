const FormRowSelect = ({ name, labelText, value, handleChange, list }) => {
  return (
    <div className="">
      <label
        htmlFor={name}
        className=" block text-sm font-medium text-content mb-2"
      >
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="block w-full p-2 border border-border rounded-lg capitalize"
      >
        {list.map((itemValue, index) => (
          <option key={index} value={itemValue}>
            {itemValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormRowSelect;
