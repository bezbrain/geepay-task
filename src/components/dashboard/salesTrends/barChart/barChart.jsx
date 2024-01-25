import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

const BarChartComp = () => {
  const data = [
    { name: "Jan", uv: 6000 },
    { name: "Feb", uv: 21000 },
    { name: "Mar", uv: 4000 },
    { name: "Apr", uv: 28000 },
    { name: "Mei", uv: 9000 },
    { name: "Jun", uv: 45000 },
    { name: "Jul", uv: 9000 },
    { name: "Aug", uv: 23000 },
    { name: "Sep", uv: 32000 },
    { name: "Okt", uv: 4000 },
    { name: "Nov", uv: 30000 },
    { name: "Des", uv: 21000 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={data}>
        <Bar type="" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComp;
