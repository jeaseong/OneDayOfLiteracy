import { ResponsiveLine } from "@nivo/line";

const PisaKoreaLine = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "linear", min: "auto", max: "auto", stacked: true }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="monotoneX"
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Year",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Score",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    enableGridX={false}
    enableGridY={false}
    colors={{ scheme: "brown_blueGreen" }}
    lineWidth={3}
    pointSize={10}
    pointColor={{ from: "color", modifiers: [] }}
    pointBorderWidth={3}
    pointBorderColor={{ from: "serieColor", modifiers: [] }}
    enablePointLabel={true}
    pointLabel="y"
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "top-right",
        direction: "row",
        justify: false,
        translateX: 12,
        translateY: 0,
        itemWidth: 100,
        itemHeight: 20,
        itemsSpacing: 4,
        symbolSize: 19,
        symbolShape: "circle",
        itemDirection: "left-to-right",
        itemTextColor: "#777",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default PisaKoreaLine;
