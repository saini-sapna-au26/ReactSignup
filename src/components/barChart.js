import React from "react";
// import { Bar } from "react";
import { Link } from "react-router-dom";

const BarChart = () => {
  // const state = {
  //   labels: ["January", "Feburary", "March", "April", "May"],
  //   datasets: [
  //     {
  //       label: "Rainfall",
  //       backgroundaColor: "rgba(75, 192, 192, 1)",
  //       borderColor: "rgba(0, 0, 0, 1)",
  //       borderWidth: 2,
  //       data: [65, 45, 123, 42, 43],
  //     },
  //   ],
  // };

  // const options = {
  //   Plugin: {
  //     legend: {
  //       display: true,
  //       position: "bottom",
  //     },
  //     title: {
  //       text: "Average Rainfall per month",
  //       display: true,
  //       frontSize: 20,
  //     },
  //   },
  // };
  return (
    <div>
      <p style={{ textAling: "center" }}>Bar charts</p>
      <h1>thid is dashboard</h1>
      <h1>Bar Chart HTML</h1>

      <div className="BarChart">
        <h1>GEEKSFORGEEKS BAR CHART REACTJS</h1>
        <div style={{ maxWidth: "650px" }}>
          <BarChart
            data={{
              // Name of the variables on x-axies for each bar
              labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
              datasets: [
                {
                  // Label for bars
                  label: "total count/value",
                  // Data or value of your each variable
                  data: [1552, 1319, 613, 1400],
                  // Color of each bar
                  backgroundColor: ["aqua", "green", "red", "yellow"],
                  // Border color of each bar
                  borderColor: ["aqua", "green", "red", "yellow"],
                  borderWidth: 0.5,
                },
              ],
            }}
            // Height of graph
            height={400}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      // The y-axis value will start from zero
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 15,
                },
              },
            }}
          />

          <Link to="/">
            <button>Back to Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
