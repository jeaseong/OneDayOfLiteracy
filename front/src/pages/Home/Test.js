import React, { Fragment } from "react";
import { line } from "d3-shape";
import { Bar } from "@nivo/bar";
import pisaKScore from "../../data/pisaKScore.json";

const barColor = "#0095ff";
const lineColor = "red";

// `v` is used for bars
// `v1` is used for line
// `v2` is used for area
const data = pisaKScore;

// const data = pisaKScore.map(({ Year, Maths, Science, Reading }) => {
//   return {
//     x: Year,
//     v: [
//       {
//         Maths,
//         Science,
//         Reading,
//       },
//     ],
//     v1: [
//       {
//         Maths,
//         Science,
//         Reading,
//       },
//     ],
//   };
// });

// const data = pisaKScore;

// console.log("data : ", data);
const Line = ({ bars, xScale, yScale }) => {
  console.log(
    "bars!!!!!",
    bars.filter((v) => v.index !== 4)
  );

  const mathLineGenerator = line()
    .x((bar) => xScale(bar.data.data.Year) + bar.width / 2)
    .y((bar) => yScale(bar.data.data.Maths));

  const readingLineGenerator = line()
    .x((bar) => xScale(bar.data.data.Year) + bar.width / 2 + bar.width * 2)
    .y((bar) => yScale(bar.data.data.Reading));
  return (
    <>
      {/* <Fragment>
        <path
          d={mathLineGenerator(bars)}
          fill="none"
          stroke={lineColor}
          style={{ pointerEvents: "none" }}
        />
        {bars.map((bar) => (
          <circle
            key={bar.key}
            cx={xScale(bar.data.data.Year) + bar.width / 2}
            cy={yScale(bar.data.data.Maths)}
            r={4}
            fill="white"
            stroke={lineColor}
            style={{ pointerEvents: "none" }}
          />
        ))}
      </Fragment> */}
      <Fragment>
        <path
          d={readingLineGenerator(bars)}
          fill="none"
          stroke={lineColor}
          style={{ pointerEvents: "none" }}
        />
        {bars.map((bar) => (
          <circle
            key={bar.key}
            cx={xScale(bar.data.data.Year) + bar.width / 2 + bar.width * 2}
            cy={yScale(bar.data.data.Reading)}
            r={4}
            fill="red"
            stroke={lineColor}
            style={{ pointerEvents: "none" }}
          />
        ))}
      </Fragment>
    </>
  );
};

const Test = () => (
  <div>
    <Bar
      width={500}
      height={400}
      data={data}
      keys={["Maths", "Science", "Reading"]}
      indexBy="Year"
      minValue={450}
      //   clamp={false}
      //   padding={0.6}
      margin={{
        top: 10,
        right: 10,
        bottom: 36,
        left: 36,
      }}
      groupMode="grouped"
      valueScale={{ type: "linear" }}
      enableLabel={true}
      //   colors={[barColor]}
      colors={{ scheme: "category10" }}
      borderRadius={2}
      axisLeft={{
        tickValues: [450, 470, 490, 510, 530, 550],
      }}
      layers={["grid", "axes", "bars", Line, "markers", "legends"]}
    />
  </div>
);

export default Test;
