import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import FormRow from "../../components/FormRow";
import FormRowSelect from "../../components/FormRowSelect";

import {
  clearValues,
  createJob,
  editJob,
  handleChange,
} from "../../features/job/jobSlice";
import { useEffect } from "react";

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);

  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields");
      return;
    }

    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      );
      return;
    }

    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: "jobLocation", value: user.location }));
    }
  }, []);

  return (
    <div className=" rounded-3xl w-full bg-surface px-16 py-8 shadow-2xl">
      <form onSubmit={handleSubmit} className=" m-0 max-w-full w-full p-0">
        <h3 className=" mt-0 text-xl md:text-2xl lg:text-4xl mb-4">
          {isEditing ? "Edit" : "Add"} job
        </h3>

        <div className=" grid gap-2 md:grid-cols-2 md:items-center md:gap-4 lg:grid-cols-3">
          {/* Position */}
          <FormRow
            type={"text"}
            name={"position"}
            labelText={"Position"}
            value={position}
            handleChange={handleJobInput}
          />
          {/* Company */}
          <FormRow
            type={"text"}
            name={"company"}
            labelText={"Company"}
            value={company}
            handleChange={handleJobInput}
          />
          {/* job Loaction */}
          <FormRow
            type={"text"}
            name={"jobLocation"}
            labelText={"Job Location"}
            value={jobLocation}
            handleChange={handleJobInput}
          />

          {/* Job Status */}
          <FormRowSelect
            name={"status"}
            labelText={"Status"}
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />

          {/* job type */}
          <FormRowSelect
            name={"jobType"}
            labelText={"Job Type"}
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className=" w-full grid grid-cols-2 gap-4 self-end mt-2">
            <button
              type="button"
              className="cursor-pointer w-full bg-content-alt text-surface py-3 px-4 rounded-lg font-medium hover:bg-content transition-all duration-300 shadow-lg shadow-primary/30"
              onClick={() => dispatch(clearValues())}
            >
              Clear
            </button>
            <button
              type="submit"
              className="cursor-pointer w-full bg-primary text-surface py-3 px-4 rounded-lg font-medium hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? "Please wait..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
