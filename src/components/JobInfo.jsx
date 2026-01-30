const JobInfo = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 text-neutral">
      {icon}

      <span className="truncate">{text}</span>
    </div>
  );
};

export default JobInfo;
