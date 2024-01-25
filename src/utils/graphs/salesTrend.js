import { Chart } from "chart.js/auto";

export const createGraph = async (graphRef) => {
  const data = [
    { year: "Jan", count: 6000 },
    { year: "Feb", count: 21000 },
    { year: "Mar", count: 4000 },
    { year: "Apr", count: 28000 },
    { year: "Mei", count: 9000 },
    { year: "Jun", count: 45000 },
    { year: "Jul", count: 9000 },
    { year: "Aug", count: 23000 },
    { year: "Sep", count: 32000 },
    { year: "Okt", count: 4000 },
    { year: "Nov", count: 30000 },
    { year: "Des", count: 21000 },
  ];

  const ctx = document.getElementById("acquisitions").getContext("2d");

  // Check if there's an existing Chart instance and destroy it
  if (graphRef.current) {
    graphRef.current.destroy();
  }

  // Create a new Chart instance
  graphRef.current = new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Aquisition by year",
          data: data.map((row) => row.count),
          borderRadius: 30,
          barPercentage: 0.6, // Adjust bar width
          backgroundColor: data.map((row) =>
            row.year === "Jun" ? "#34CAA5" : "rgba(52, 202, 165, 0.10)"
          ),
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          // min: 0,
          max: 50000,
          ticks: {
            stepSize: 10000, // Set the step size between ticks
            maxTicksLimit: 7, // Maximum number of ticks to display
            callback: function (value, i, val) {
              return value === 0 ? "0" : value.toLocaleString(); // Format ticks as locale-specific strings
            },
          },
          grid: {
            // display: false,
          },
        },
        x: {
          grid: {
            display: false, // Remove vertical grid lines
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      aspectRatio: 3, // Reduce the space between each value on the y-axis
    },
  });
};
