import {
  PolarChart,
  CommonSeriesSettings,
  Series,
  Legend,
} from "devextreme-react/polar-chart";

export const sources = [{ value: "views", name: "Views" }];

export const productionData = [
  {
    arg: "Safari",
    views: 1300,
  },
  {
    arg: "Firefox",
    views: 1200,
  },
  {
    arg: "Chrome",
    views: 1500,
  },
  {
    arg: "Explorer",
    views: 400,
  },
];

const PieChart = () => {
  return (
    <PolarChart
      height={220}
      id="chart"
      dataSource={productionData}
      useSpiderWeb={false}
    >
      <CommonSeriesSettings type="line" />
      {sources.map((item) => (
        <Series key={item.value} valueField={item.value} name={item.name} />
      ))}
      <Legend visible={false} />
    </PolarChart>
  );
};

export default PieChart;
