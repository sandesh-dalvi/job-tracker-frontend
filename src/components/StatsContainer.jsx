import { useSelector } from "react-redux";
import StatItem from "./StatItem";
import { FaBriefcase, FaBug, FaCalendar } from "react-icons/fa";

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);

  const defaultStats = [
    {
      label: "Pending Applications",
      value: stats.pending || 0,
      icon: <FaBriefcase />,
      bgColor: "bg-warning-light/50",
      iconBg: "bg-warning-light",
      textColor: "text-warning-dark",
      barColor: "bg-warning",
    },
    {
      label: "Interviews Scheduled",
      value: stats.interview || 0,
      icon: <FaCalendar />,
      bgColor: "bg-primary-light/50",
      iconBg: "bg-primary-light",
      textColor: "text-primary-dark",
      barColor: "bg-primary",
    },
    {
      label: "Jobs Declined",
      value: stats.declined || 0,
      icon: <FaBug />,
      bgColor: "bg-error-light/50",
      iconBg: "bg-error-light",
      textColor: "text-error-dark",
      barColor: "bg-error",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {defaultStats.map((stat, idx) => (
        <StatItem key={idx} {...stat} />
      ))}
    </div>
  );
};

export default StatsContainer;
