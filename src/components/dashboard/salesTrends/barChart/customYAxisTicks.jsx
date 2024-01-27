import React from "react";

const CustomYAxisTick = (props) => {
  const { x, y, payload } = props;

  const customLabels = {
    10000: "5.000",
    20000: "10.000",
    30000: "20.000",
    40000: "30.000",
    50000: "40.000",
    60000: "50.000",
  };

  const formattedValue =
    customLabels[payload.value] ||
    payload.value.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={-50} y={-5} dy={10} fill="#666" transform="rotate(360)">
        {formattedValue}
      </text>
    </g>
  );
};

export default CustomYAxisTick;
