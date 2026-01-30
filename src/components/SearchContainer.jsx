import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import { clearFilters, handleChange } from "../features/allJobs/allJobsSlice";

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState("");

  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch("");
    dispatch(clearFilters());
  };

  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);

      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
      }, 1000);
    };
  };

  const optimizedDebounce = useMemo(() => debounce(), []);

  return (
    <div className=" rounded-3xl w-full bg-surface px-16 py-8 shadow-2xl">
      <form onSubmit={handleSubmit} className=" m-0 max-w-full w-full p-0">
        <h3 className=" mt-0 text-xl md:text-2xl lg:text-4xl mb-4">
          Search Form
        </h3>

        <div className=" grid gap-2 md:grid-cols-2 md:items-center md:gap-4 lg:grid-cols-3">
          {/* search position*/}
          <FormRow
            type={"text"}
            name={"search"}
            labelText={"Search"}
            value={localSearch}
            handleChange={optimizedDebounce}
          />

          {/* search by status */}
          <FormRowSelect
            name={"searchStatus"}
            labelText={"Status"}
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />

          {/* search by type*/}
          <FormRowSelect
            name={"searchType"}
            labelText={"Type"}
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />

          {/* sort*/}
          <FormRowSelect
            name={"sort"}
            labelText={"Sort"}
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />

          <button
            type="submit"
            className="cursor-pointer w-full bg-error-light/60 text-error-dark py-3 px-4 rounded-lg font-medium hover:bg-error-light transition-all duration-300 shadow-lg shadow-error/30"
          >
            Clear Filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchContainer;
