import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Job from "./Job";
import Loading from "./Loading";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    numOfPages,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs({ page, search, searchStatus, searchType, sort }));
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return (
      <div className=" mt-8 md:mt-16">
        <Loading />
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className=" mt-8 md:mt-16">
        <h2 className=" text-lg md:text-2xl lg:text-3xl font-semibold text-neutral">
          No jobs to display...
        </h2>
      </div>
    );
  }

  return (
    <div className=" mt-8 md:mt-16">
      <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
        {totalJobs} Job{jobs.length > 1 && "s"} Found
      </h5>

      <div className=" mt-4 lg:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </div>
  );
};

export default JobsContainer;
