import React from "react";

const CustomYAxisTick = (props) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={-50}
        y={0}
        dy={10} // Adjust the dy value as needed
        // textAnchor="end"
        fill="#666"
        transform="rotate(360)" // Rotate the text for better alignment
      >
        {payload.value.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </text>
    </g>
  );
};

export default CustomYAxisTick;
