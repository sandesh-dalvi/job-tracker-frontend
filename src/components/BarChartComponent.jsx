import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray={"10 10"} />
        <XAxis dataKey={"date"} />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey={"count"} fill="#60a5fa" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
