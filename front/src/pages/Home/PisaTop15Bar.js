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
      position: "top",
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
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "2009",
      data: pisaTop15.map((v) => v["2009"]),
      backgroundColor: "rgba(255, 159, 64, 0.5)",
    },
    {
      label: "2012",
      data: pisaTop15.map((v) => v["2012"]),
      backgroundColor: "rgba(153, 102, 255, 0.5)",
    },
    {
      label: "2015",
      data: pisaTop15.map((v) => v["2015"]),
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
    {
      label: "2018",
      data: pisaTop15.map((v) => v["2018"]),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const PisaTop15Bar = () => {
  return <Bar options={options} data={data} />;
};
export default PisaTop15Bar;
