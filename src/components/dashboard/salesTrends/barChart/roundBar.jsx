const RoundedBar = (props) => {
  const { fill, x, y, width, height } = props;

  const radius = 20; // Adjust the radius value as needed

  return (
    <g>
      <path
        fill={fill}
        d={`M${x},${y + height}L${x},${y + radius}Q${x},${y} ${
          x + radius
        },${y}H${x + width - radius}Q${x + width},${y} ${x + width},${
          y + radius
        }V${y + height}`}
      />
    </g>
  );
};

export default RoundedBar;
