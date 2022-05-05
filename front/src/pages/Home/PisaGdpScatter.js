import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter, Line } from "react-chartjs-2";
import pisaGdp from "../../data/pisaGdp.json";
import ransac from "../../data/ransac.json";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
  scales: {
    y: {
      beginAtZero: false,
    },
  },

  plugins: {
    title: {
      display: true,
      text: "Pisa 점수와 Gdp 상관관계",
      font: {
        size: 20,
      },
    },
  },
  elements: {
    point: {
      radius: 6,
      borderWidth: 0,
    },
  },
};

const data = {
  datasets: [
    {
      type: "scatter",
      label: pisaGdp.map((v) => v.Country),
      data: Array.from(pisaGdp, (v) => ({
        x: v.x,
        y: v.y,
      })),
      backgroundColor: [
        "rgb(210, 163, 162)",
        "rgb(155, 227, 174)",
        "rgb(235, 187, 150)",
        "rgb(162, 245, 150)",
        "rgb(151, 253, 162)",
        "rgb(150, 156, 253)",
        "rgb(160, 191, 237)",
        "rgb(169, 161, 229)",
        "rgb(157, 225, 169)",
        "rgb(194, 230, 167)",
        "rgb(238, 201, 157)",
        "rgb(165, 218, 207)",
        "rgb(227, 210, 160)",
        "rgb(153, 252, 155)",
        "rgb(165, 180, 232)",
        "rgb(173, 221, 152)",
        "rgb(227, 190, 166)",
        "rgb(226, 162, 166)",
        "rgb(196, 166, 225)",
        "rgb(207, 160, 155)",
        "rgb(208, 156, 234)",
        "rgb(172, 242, 171)",
        "rgb(157, 174, 211)",
        "rgb(206, 167, 153)",
        "rgb(165, 216, 209)",
        "rgb(159, 170, 255)",
        "rgb(206, 152, 182)",
        "rgb(206, 217, 161)",
        "rgb(238, 192, 164)",
        "rgb(221, 186, 154)",
        "rgb(228, 152, 186)",
        "rgb(171, 159, 245)",
        "rgb(178, 187, 232)",
        "rgb(216, 150, 187)",
        "rgb(151, 171, 219)",
        "rgb(225, 151, 197)",
        "rgb(165, 157, 225)",
        "rgb(157, 244, 191)",
        "rgb(158, 218, 216)",
        "rgb(168, 247, 170)",
        "rgb(255, 182, 162)",
        "rgb(205, 153, 207)",
        "rgb(154, 164, 224)",
        "rgb(210, 225, 160)",
        "rgb(157, 206, 228)",
        "rgb(184, 160, 217)",
        "rgb(159, 174, 214)",
        "rgb(177, 236, 179)",
        "rgb(172, 157, 239)",
        "rgb(199, 155, 216)",
        "rgb(161, 206, 214)",
        "rgb(158, 224, 207)",
        "rgb(229, 173, 150)",
        "rgb(167, 254, 163)",
        "rgb(218, 181, 157)",
        "rgb(230, 157, 157)",
        "rgb(237, 159, 190)",
        "rgb(154, 207, 238)",
        "rgb(165, 234, 162)",
        "rgb(173, 164, 252)",
        "rgb(153, 216, 183)",
        "rgb(157, 242, 151)",
        "rgb(170, 180, 228)",
        "rgb(186, 207, 153)",
        "rgb(255, 159, 174)",
        "rgb(229, 164, 150)",
        "rgb(157, 242, 151)",
        "rgb(152, 165, 208)",
        "rgb(214, 155, 210)",
        "rgb(223, 204, 162)",
        "rgb(225, 162, 172)",
        "rgb(208, 168, 157)",
        "rgb(233, 200, 153)",
        "rgb(158, 176, 236)",
        "rgb(203, 150, 181)",
        "rgb(165, 182, 226)",
        "rgb(177, 170, 248)",
        "rgb(152, 225, 208)",
      ],
    },
    {
      type: "line",
      label: "regression",
      data: ransac[0].data,
      borderColor: "gray",
      backgroundColor: "gray",
    },
  ],
};

const PisaGdpScatter = () => {
  return <Scatter options={options} data={data} />;
};
export default PisaGdpScatter;
