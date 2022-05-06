// import React, { useRef, useState } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, getElementAtEvent } from "react-chartjs-2";
// import pisaTop15 from "../../data/pisaTop15.json";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const options = {
//   responsive: true,
//   scales: {
//     y: {
//       min: 480,
//     },
//   },
//   plugins: {
//     // legend: {
//     //   position: "top",
//     // },
//     legend: {
//       // position: "top",
//       onClick: (e, item, legend) => {
//         const index = item.datasetIndex;
//         const chart = legend.chart;

//         legend.chart.data.datasets.forEach((ds, it) => {
//           chart.hide(it);
//           ds.hidden = true;
//         });

//         chart.show(index);
//         item.hidden = false;

//         chart.update();
//       },
//     },
//     title: {
//       display: true,
//       text: "국가별 Pisa 점수 top 15",
//       font: {
//         size: 20,
//       },
//     },
//   },
// };

// const initLabels = pisaTop15.map((v) => v.Country);
// const labels = {};
// const data = {
//   labels,
//   datasets: [
//     {
//       label: "2006",
//       data: pisaTop15.map((v) => v["2006"]),
//       backgroundColor: "#EF476F",
//     },
//     {
//       label: "2009",
//       data: pisaTop15.map((v) => v["2009"]),
//       backgroundColor: "#FFD166",
//     },
//     {
//       label: "2012",
//       data: pisaTop15.map((v) => v["2012"]),
//       backgroundColor: "#06D6A0",
//     },
//     {
//       label: "2015",
//       data: pisaTop15.map((v) => v["2015"]),
//       backgroundColor: "#118AB2",
//     },
//     {
//       label: "2018",
//       data: pisaTop15.map((v) => v["2018"]),
//       backgroundColor: "#073B4C",
//     },
//   ],
// };
// const initData = {};
// const PisaTop15Bar = () => {
//   const [data, setData] = useState({ labels: initLabels, datasets: initData });
//   const chartRef = useRef(null);

//   const printElementAtEvent = (element) => {
//     if (!element.length) return;

//     const { index } = element[0];
//     console.log(chartRef.current);

//     setData((cur) => ({
//       ...cur,
//       datasets: [
//         {
//           label: `${initLabels[index]}`,
//           data: Object.values(pisaTop15[index]).filter(
//             (data) => data !== initLabels[index]
//           ),
//           backgroundColor: "rgba(53, 162, 235, 0.5)",
//         },
//       ],
//     }));
//   };

//   const onClick = (event) => {
//     const { current: chart } = chartRef;

//     if (!chart) {
//       return;
//     }

//     printElementAtEvent(getElementAtEvent(chartRef.current, event));
//   };

//   return <Bar ref={chartRef} options={options} onClick={onClick} data={data} />;
// };
// export default PisaTop15Bar;
