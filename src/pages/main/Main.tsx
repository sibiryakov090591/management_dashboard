import { Box, IconButton } from "@mui/material";
import Statistics from "./components/statistics/Statictics";
import { styled } from "@mui/material/styles";
import Chart from "./components/chart/Chart";
import Slider from "./components/slider/Slider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PieChart from "./components/pieChart/PieChart";
import { PieChart as MaterialPirChart } from "@mui/x-charts/PieChart";

const Title = styled("h2")(() => ({
  fontSize: "18px !important",
  fontWeight: "600 !important",
}));

const TitleWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const StatisticsItem = styled("div")(({ theme }) => ({
  borderRadius: "22px",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "22px",
  height: "80px",
}));

const StatisticsItemTitle = styled("div")(({ theme }) => ({
  fontSize: "14px !important",
  fontWeight: "700 !important",
  lineHeight: "1.6",
}));

const StatisticsItemCount = styled("div")(({ theme }) => ({
  fontSize: "22px !important",
  fontWeight: "600 !important",
  color: theme.palette.primary.dark,
  lineHeight: "1.6",
}));

const StatisticsItemSubTitle = styled("div")(({ theme }) => ({
  fontSize: "10px !important",
  fontWeight: "600 !important",
  lineHeight: "1.6",
}));

const data = [
  { value: 5, label: "A" },
  { value: 10, label: "B" },
  { value: 15, label: "C" },
  { value: 20, label: "D" },
];

const Main = () => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flex: 1,
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },
      })}
    >
      <Box sx={{ flex: 1, padding: "0 26px 26px" }}>
        <Statistics />
        <Title>Sessions overview</Title>
        <Chart />
        <Slider />
      </Box>
      <Box
        sx={(theme) => ({
          width: "25%",
          minWidth: "300px",
          padding: "28px",
          backgroundColor: "#ffffff",
          [theme.breakpoints.down("md")]: {
            width: "auto",
          },
        })}
      >
        <TitleWrapper>
          <Title sx={{ marginTop: 0 }}>Views by browser</Title>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </TitleWrapper>
        <Box p={"20px"}>
          <PieChart />
        </Box>
        <TitleWrapper sx={{ marginBottom: "12px" }}>
          <Title sx={{ marginTop: 0 }}>Statistics</Title>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </TitleWrapper>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <StatisticsItem>
            <StatisticsItemTitle>
              Online
              <br />
              Visitors
            </StatisticsItemTitle>
            <Box>
              <MaterialPirChart
                height={60}
                width={60}
                series={[
                  {
                    data: [{ value: 20, color: "#6b75ca" }],
                    innerRadius: 15,
                    outerRadius: 21,
                    paddingAngle: 2,
                    cornerRadius: 5,
                    startAngle: -100,
                    endAngle: 180,
                    cx: 25,
                    // cy: 150,
                  },
                ]}
              />
            </Box>
            <Box>
              <StatisticsItemSubTitle>Max512</StatisticsItemSubTitle>
              <StatisticsItemCount>312</StatisticsItemCount>
            </Box>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsItemTitle>
              New
              <br />
              Visitors
            </StatisticsItemTitle>
            <Box>
              <MaterialPirChart
                height={60}
                width={60}
                series={[
                  {
                    data: [{ value: 8, color: "#6b75ca" }],
                    innerRadius: 15,
                    outerRadius: 21,
                    paddingAngle: 2,
                    cornerRadius: 5,
                    startAngle: -140,
                    endAngle: 180,
                    cx: 25,
                    // cy: 150,
                  },
                ]}
              />
            </Box>
            <Box>
              <StatisticsItemSubTitle>Max381</StatisticsItemSubTitle>
              <StatisticsItemCount>136</StatisticsItemCount>
            </Box>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsItemTitle>
              Average
              <br />
              Revenue
            </StatisticsItemTitle>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                3076.25
              </Box>
              <Box
                sx={(theme) => ({
                  backgroundColor: theme.palette.primary.dark,
                  padding: "2px 3px",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "11px",
                  borderRadius: "3px",
                  marginLeft: "12px",
                })}
              >
                +21%
              </Box>
            </Box>
          </StatisticsItem>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
