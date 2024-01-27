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
import CustomYAxisTick from "./customYAxisTicks";

const BarChartComp = ({ isDark }) => {
  const data = [
    { name: "Jan", count: 13000 },
    { name: "Feb", count: 31000 },
    { name: "Mar", count: 10000 },
    { name: "Apr", count: 38000 },
    { name: "Mei", count: 19000 },
    { name: "Jun", count: 55000 },
    { name: "Jul", count: 19000 },
    { name: "Aug", count: 36000 },
    { name: "Sep", count: 43000 },
    { name: "Okt", count: 10000 },
    { name: "Nov", count: 40000 },
    { name: "Des", count: 35000 },
  ];

  const yAxisTicks = [0, 10000, 20000, 30000, 40000, 50000, 60000];

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

  const [hoveredBarIndex, setHoveredBarIndex] = useState(null);

  return (
    <ResponsiveContainer
      width={isWindow <= 660 ? 800 : "100%"}
      height={isWindow >= 1130 || isWindow <= 990 ? 300 : 500}
    >
      <BarChart data={data} style={{ overflowY: "hidden" }}>
        <CartesianGrid vertical={false} strokeDasharray="2 2" />
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis
          tick={<CustomYAxisTick />}
          ticks={yAxisTicks}
          // domain={[0, "dataMax"]}
          domain={[0, 50000]}
          // tickFormatter={formatYAxisTick}
          tickLine={false}
          axisLine={false}
        />

        <Tooltip
          content={<CustomTooltip isDark={isDark} />}
          // position={{ y: 0 }}
          cursor={{ fill: "transparent" }}
        />

        <Bar
          dataKey="count"
          barSize={30}
          radius={[20, 20, 0, 0]}
          fill={isDark ? "rgba(8, 249, 193, 0.1)" : "rgba(52, 202, 165, 0.10)"}
          // isAnimationActive={false}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComp;
