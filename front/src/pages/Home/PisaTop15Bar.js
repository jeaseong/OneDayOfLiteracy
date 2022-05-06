import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import pisaTop15 from "../../data/pisaTop15.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  scales: {
    y: {
      min: 480,
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "국가별 Pisa 점수 top 15",
      font: {
        size: 20,
      },
    },
  },
};

const labels = pisaTop15.map((v) => v.Country);

const data = {
  labels,
  datasets: [
    {
      label: "2006",
      data: pisaTop15.map((v) => v["2006"]),
      backgroundColor: "#e279a1",
      categoryPercentage: 1.0,
      barPercentage: 0.8,
    },
    {
      label: "2009",
      data: pisaTop15.map((v) => v["2009"]),
      backgroundColor: "#ff9770",
      categoryPercentage: 1.0,
      barPercentage: 0.8,
    },
    {
      label: "2012",
      data: pisaTop15.map((v) => v["2012"]),
      backgroundColor: "#ffd670",
      categoryPercentage: 1.0,
      barPercentage: 0.8,
    },
    {
      label: "2015",
      data: pisaTop15.map((v) => v["2015"]),
      backgroundColor: "#e9ff70",
      categoryPercentage: 1.0,
      barPercentage: 0.8,
    },
    {
      label: "2018",
      data: pisaTop15.map((v) => v["2018"]),
      backgroundColor: "#adeacb",
      categoryPercentage: 1.0,
      barPercentage: 0.8,
    },
  ],
};

const PisaTop15Bar = () => {
  return <Bar options={options} data={data} />;
};
export default PisaTop15Bar;
