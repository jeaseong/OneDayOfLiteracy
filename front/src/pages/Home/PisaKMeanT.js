import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import pisaKMeanT from "../../data/pisaKMeanT.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// ChartJS.defaults.scales.linear.min = 440;

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "대한민국 Pisa 점수",
      font: {
        size: 20,
      },
    },
  },
  scales: {
    y: {
      min: 480,
    },
  },
};

const labels = pisaKMeanT[0].data.map((v) => v.x);

const data = {
  labels,
  datasets: [
    {
      label: "Male",
      data: pisaKMeanT[0].data,
      borderColor: "rgba(53, 162, 235, 0.5)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Female",
      data: pisaKMeanT[1].data,
      borderColor: "rgba(255, 99, 132, 0.5)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Total",
      data: pisaKMeanT[2].data,
      borderColor: "#5BAEAE",
      backgroundColor: "#5BAEAE",
    },
  ],
};

const PisaKMeanT = () => {
  return <Line options={options} data={data} />;
};
export default PisaKMeanT;
