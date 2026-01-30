import { useState } from "react";
import { useSelector } from "react-redux";

import BarChartComponent from "./BarChartComponent";
import AreaChartComponent from "./AreaChartComponent";

const ChartsCoontainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
        Monthly Applications
      </h2>
      <div className=" w-full flex justify-center items-center">
        <button
          type="button"
          onClick={() => setBarChart(!barChart)}
          className="lg:text-lg xl:text-xl cursor-pointer  font-semibold text-primary-dark hover:text-primary transition-all duration-300 mb-4 sm:mb-6 text-center"
        >
          {barChart ? "Area Chart" : "Bar Chart"}
        </button>
      </div>
      <div className=" mt-2 ">
        {barChart ? (
          <BarChartComponent data={data} />
        ) : (
          <AreaChartComponent data={data} />
        )}
      </div>
    </div>
  );
};

export default ChartsCoontainer;
