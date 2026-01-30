import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";
import StatsContainer from "../../components/StatsContainer";
import ChartsCoontainer from "../../components/ChartsCoontainer";

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Statistics</h1>
        <p className="text-gray-600 mt-1">
          Track your job application progress
        </p>
      </div>

      <StatsContainer />

      {monthlyApplications.length > 0 && <ChartsCoontainer />}
    </div>
  );
};

export default Stats;
