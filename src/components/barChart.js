import React from "react";
import { Bar } from "react";

const BarChart = () => {
  const state = {
    labels: ["January", "Feburary", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        backgroundaColor: "rgba(75, 192, 192, 1)",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 2,
        data: [65, 45, 123, 42, 43],
      },
    ],
  };

  const options = {
    Plugin: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        text: "Average Rainfall per month",
        display: true,
        frontSize: 20,
      },
    },
  };
  return (
    <div>
      <Bar data={state} options={options} />
      <p style={{ textAling: "center" }}>Bar charts</p>
    </div>
  );
};

export default BarChart;
