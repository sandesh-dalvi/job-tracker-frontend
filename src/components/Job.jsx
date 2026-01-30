import {
  IoBriefcaseOutline,
  IoCalendarClearOutline,
  IoLocationSharp,
} from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import JobInfo from "./JobInfo";
import dayjs from "dayjs";
import { deleteJob, setEditJob } from "../features/job/jobSlice";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();

  const date = dayjs(createdAt).format("DD MMM YYYY");

  const statusConfig = {
    interview: {
      bg: "bg-primary-light/50",
      text: "text-primary-dark",
      label: "Interview",
    },
    pending: {
      bg: "bg-warning-light/50",
      text: "text-warning-dark",
      label: "Pending",
    },
    declined: {
      bg: "bg-error-light/50",
      text: "text-error-dark",
      label: "Declined",
    },
  };

  return (
    <div className=" bg-surface rounded-lg border border-muted-dark shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="p-4 sm:p-6 pb-3 sm:pb-4">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary rounded-lg flex items-center justify-center shrink-0">
            <span className="text-surface font-bold text-lg sm:text-xl lg:text-2xl">
              {company.charAt(0)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-content mb-1 leading-tight">
              {position}
            </h3>
            <p className="text-sm sm:text-base text-content-alt truncate">
              {company}
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="px-4 sm:px-6 pb-3 sm:pb-4 space-y-2 sm:space-y-3 capitalize">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 sm:gap-2 text-neutral">
            <JobInfo
              icon={<IoLocationSharp className=" w-5 h-5" />}
              text={jobLocation}
            />
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-neutral shrink-0">
            <JobInfo
              icon={<IoCalendarClearOutline className=" w-5 h-5" />}
              text={date}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 sm:gap-2 text-neutral">
            <JobInfo
              icon={<IoBriefcaseOutline className=" w-5 h-5" />}
              text={jobType}
            />
          </div>
          <span
            className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium ${statusConfig[status].bg} ${statusConfig[status].text} shrink-0`}
          >
            {statusConfig[status].label}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-muted border-t border-muted-dark flex gap-2 sm:gap-3">
        <Link
          className="flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 sm:py-2 bg-success-light/50 text-success-dark rounded font-medium text-xs sm:text-sm hover:bg-success-light transition-colors"
          to={"/add-job"}
          onClick={() =>
            dispatch(
              setEditJob({
                editJobId: _id,
                position,
                company,
                jobLocation,
                jobType,
                createdAt,
                status,
              })
            )
          }
        >
          Edit
        </Link>
        <button
          type="button"
          className="flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 sm:py-2 bg-error-light/50 text-error-dark rounded font-medium text-xs sm:text-sm hover:bg-error-light transition-colors"
          onClick={() => dispatch(deleteJob(_id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Job;
