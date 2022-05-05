import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import menliteracyEmployeeScatter from "../../data/menliteracyEmployeeScatter.json";
import womenliteracyEmployeeScatter from "../../data/womenliteracyEmployeeScatter.json";
import menliteracyEmployeeReg from "../../data/menliteracyEmployeeReg.json";
import womenliteracyEmployeeReg from "../../data/womenliteracyEmployeeReg.json";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "문해력과 고용률",
      font: {
        size: 20,
      },
    },
    legend: {
      position: "chartArea",
      align: "start",
      borderWidth: 0,
    },
  },
  scales: {
    y: {
      beginAtZero: true,

      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  elements: {
    point: {
      radius: 5,
      borderWidth: 0,
      hoverRadius: 9,
    },
  },
  datasets: {
    line: {
      pointRadius: 0,
    },
  },
};

export const data = {
  datasets: [
    {
      type: "scatter",
      label: "Male",
      data: Array.from(menliteracyEmployeeScatter[0].data, (v) => ({
        x: v.x,
        y: v.y,
      })),
      borderColor: "rgba(53, 162, 235, 0.7)",
      backgroundColor: "rgba(53, 162, 235, 0.8)",
    },
    {
      type: "scatter",
      label: "Female",
      data: Array.from(womenliteracyEmployeeScatter[0].data, (v) => ({
        x: v.x,
        y: v.y,
      })),
      borderColor: "rgba(255, 99, 132, 0.7)",
      backgroundColor: "rgba(255, 99, 132, 0.8)",
    },
    {
      type: "line",
      label: "Male Regression",
      data: menliteracyEmployeeReg[0].data,
      borderColor: "#F7D050",
      backgroundColor: "#F7D050",
    },
    {
      type: "line",
      label: "Female Regression",
      data: womenliteracyEmployeeReg[0].data,
      borderColor: "#0F2157",
      backgroundColor: "#0F2157",
    },
  ],
};

const PisaEmployee = () => {
  return <Scatter options={options} data={data} />;
};

export default PisaEmployee;
