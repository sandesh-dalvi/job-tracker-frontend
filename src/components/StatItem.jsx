const StatItem = ({
  bgColor,
  textColor,
  value,
  iconBg,
  icon,
  label,
  barColor,
}) => {
  return (
    <div className={`${bgColor} rounded-lg overflow-hidden`}>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <h3
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${textColor}`}
          >
            {value}
          </h3>
          <div
            className={`${iconBg} ${textColor} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center text-2xl sm:text-3xl`}
          >
            {icon}
          </div>
        </div>
        <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-900">
          {label}
        </p>
      </div>
      <div className={`h-1 sm:h-1.5 ${barColor} w-full`}></div>
    </div>
  );
};

export default StatItem;
