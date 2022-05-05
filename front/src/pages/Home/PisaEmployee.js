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
  scales: {
    y: {
      beginAtZero: true,
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
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      type: "scatter",
      label: "Female",
      data: Array.from(womenliteracyEmployeeScatter[0].data, (v) => ({
        x: v.x,
        y: v.y,
      })),
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
    {
      type: "line",
      label: "Male Regression",
      data: menliteracyEmployeeReg[0].data,
      borderColor: "gray",
      backgroundColor: "gray",
    },
    {
      type: "line",
      label: "Female Regression",
      data: womenliteracyEmployeeReg[0].data,
      borderColor: "#005555",
      backgroundColor: "#005555",
    },
  ],
};

const PisaEmployee = () => {
  return <Scatter options={options} data={data} />;
};

export default PisaEmployee;
