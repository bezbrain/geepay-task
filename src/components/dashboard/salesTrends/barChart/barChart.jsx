import React, { useEffect, useState } from "react";
import styles from "./barChart.module.css";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import RoundedBar from "./roundBar";
import CustomTooltip from "./CustomTooltip";

const BarChartComp = ({ isDark }) => {
  const data = [
    { name: "Jan", count: 6000 },
    { name: "Feb", count: 21000 },
    { name: "Mar", count: 4000 },
    { name: "Apr", count: 28000 },
    { name: "Mei", count: 9000 },
    { name: "Jun", count: 45000 },
    { name: "Jul", count: 9000 },
    { name: "Aug", count: 23000 },
    { name: "Sep", count: 32000 },
    { name: "Okt", count: 4000 },
    { name: "Nov", count: 30000 },
    { name: "Des", count: 21000 },
  ];

  const formatYAxisTick = (tickValue) =>
    tickValue.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  const yAxisTicks = [0, 5000, 10000, 20000, 30000, 40000, 50000];

  const [isWindow, setIsWindow] = useState(window.innerWidth);

  const handleResize = () => {
    setIsWindow(window.innerWidth);
  };

  useEffect(() => {
    // Add resize event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isWindow]);

  return (
    <ResponsiveContainer
      width={isWindow <= 660 ? 800 : "100%"}
      height={isWindow >= 1130 || isWindow <= 990 ? 270 : 500}
    >
      <BarChart data={data} style={{ overflowY: "hidden" }}>
        <CartesianGrid vertical={false} strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis
          ticks={yAxisTicks}
          domain={[0, "dataMax"]}
          tickFormatter={formatYAxisTick}
        />

        <Tooltip
          content={<CustomTooltip isDark={isDark} />}
          cursor={{ fill: "transparent" }}
        />

        <Bar
          dataKey="count"
          shape={<RoundedBar />}
          fill={isDark ? "rgba(6, 252, 194, 0.1)" : "rgba(52, 202, 165, 0.10)"}
          barSize={30}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComp;
