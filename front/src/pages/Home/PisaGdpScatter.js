import { ResponsiveScatterPlot } from "@nivo/scatterplot";

const PisaGdpScatter = ({ data /* see data tab */ }) => (
  <ResponsiveScatterPlot
    data={data}
    margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
    xScale={{ type: "linear", min: "auto", max: "auto" }}
    xFormat=">-.2f"
    yScale={{ type: "linear", min: "auto", max: "auto" }}
    blendMode="multiply"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "GDP per Capita",
      legendPosition: "middle",
      legendOffset: 46,
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "PISA Score",
      legendPosition: "middle",
      legendOffset: -60,
    }}
    useMesh={false}
    legends={[]}
  />
);
export default PisaGdpScatter;
