import React, { useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, getElementAtEvent } from "react-chartjs-2";
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
      suggestedMin: 50,
      suggestedMax: 100,
    },
  },
  plugins: {
    // legend: {
    //   position: "top",
    // },
    legend: {
      // position: "top",
      onClick: (e, item, legend) => {
        const index = item.datasetIndex;
        const chart = legend.chart;

        legend.chart.data.datasets.forEach((ds, it) => {
          chart.hide(it);
          ds.hidden = true;
        });

        chart.show(index);
        item.hidden = false;

        chart.update();
      },
    },
    title: {
      display: true,
      text: "국가별 Pisa 점수 top 15",
    },
  },
};

const initLabels = pisaTop15.map((v) => v.Country);

const initData = [
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
];

const PisaTop15Bar = () => {
  const [data, setData] = useState({ labels: initLabels, datasets: initData });
  const chartRef = useRef(null);

  const printElementAtEvent = (element) => {
    if (!element.length) return;

    const { index } = element[0];
    console.log(chartRef.current);

    setData((cur) => ({
      ...cur,
      datasets: [
        {
          label: `${initLabels[index]}`,
          data: Object.values(pisaTop15[index]).filter(
            (data) => data !== initLabels[index]
          ),
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    }));
  };

  const onClick = (event) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    printElementAtEvent(getElementAtEvent(chartRef.current, event));
  };

  return <Bar ref={chartRef} options={options} onClick={onClick} data={data} />;
};
export default PisaTop15Bar;
