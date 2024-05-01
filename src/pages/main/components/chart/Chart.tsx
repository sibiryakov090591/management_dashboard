import * as React from "react";
import Stack from "@mui/material/Stack";
import { LineChart } from "@mui/x-charts/LineChart";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Box, Button, Hidden } from "@mui/material";

const dateValues: Array<{ label: FilterValues; xLabels: string[] }> = [
  {
    label: "Today",
    xLabels: [
      "00:00am",
      "02:00am",
      "04:00am",
      "06:00am",
      "08:00am",
      "10:00am",
      "00:00pm",
      "02:00pm",
      "04:00pm",
      "06:00pm",
      "08:00pm",
      "10:00pm",
    ],
  },
  {
    label: "7d",
    xLabels: [
      "15 Sun",
      "16 Mon",
      "17 Tue",
      "18 Wen",
      "19 Thu",
      "20 Fri",
      "21 Sat",
    ],
  },
  {
    label: "2w",
    xLabels: [
      "15 Sun",
      "16 Mon",
      "17 Tue",
      "18 Wen",
      "19 Thu",
      "20 Fri",
      "21 Sat",
      "22 Sun",
      "23 Mon",
      "24 Tue",
      "25 Wen",
      "26 Thu",
      "27 Fri",
      "28 Sat",
    ],
  },
  {
    label: "1m",
    xLabels: [
      "1 Sun",
      "4 Wen",
      "9 Mon",
      "11 Wen",
      "13 Fri",
      "16 Mon",
      "18 Wen",
      "21 Fri",
      "23 Mon",
      "25 Wen",
      "28 Fri",
      "30 Mon",
    ],
  },
  {
    label: "3m",
    xLabels: [
      "1 Jan",
      "10 Jan",
      "20 Jan",
      "30 Jan",
      "1 Feb",
      "10 Feb",
      "20 Feb",
      "30 Feb",
      "1 Mar",
      "10 Mar",
      "20 Mar",
      "30 Mar",
    ],
  },
  {
    label: "2024",
    xLabels: [
      "Jan",
      "Fab",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
];

interface Series {
  id: number;
  data: number[];
  area: boolean;
  stack: string;
  curve: string;
  color: string;
}

type FilterValues = "Today" | "7d" | "2w" | "1m" | "3m" | "2024";

const StyledButton = styled("button")(({ theme }) => ({
  outline: "none",
  cursor: "pointer",
  border: `2px solid transparent`,
  borderRadius: "3px",
  fontSize: "10px",
  fontWeight: 600,
  padding: "3px 5px",
  color: theme.palette.secondary.contrastText,
  backgroundColor: "transparent",
  height: "24px",
  "&:hover": {
    border: `2px solid #c9ced5`,
  },
  "&.active": {
    border: `2px solid #c9ced5`,
    color: "#596c7e",
  },
}));

const Chart = () => {
  const [labels, setLabels] = React.useState<string[]>([]);
  const [series, setSeries] = React.useState<Series[]>([]);
  const [filterValue, setFilterValue] = React.useState<FilterValues>("2w");

  useEffect(() => {
    const data = dateValues.find((i) => i.label === filterValue);
    if (data) {
      setLabels([...data.xLabels]);
      setSeries([
        {
          id: 1,
          data: Array.from({ length: data.xLabels.length }).map(() =>
            Math.floor(Math.random() * 401)
          ),
          area: false,
          stack: "1",
          curve: "catmullRom",
          color: "#6b75ca",
        },
      ]);
    }
  }, [filterValue]);

  const onChangeFilter = (value: FilterValues) => () => {
    setFilterValue(value);
  };

  const getDataLabel = () => {
    switch (filterValue) {
      case "Today":
        return "01/30/24";
      case "7d":
        return "01/23/24 - 01/30/24";
      case "2w":
        return "01/15/24 - 01/30/24";
      case "1m":
        return "01/01/24 - 01/30/24";
      case "3m":
        return "11/01/23 - 01/30/24";
      case "2024":
        return "01/30/23 - 01/30/24";
      default:
        return "";
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Box
            display="flex"
            alignItems="center"
            sx={(theme) => ({
              color: theme.palette.secondary.contrastText,
              fontWeight: 600,
              fontSize: 12,
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
              },
              [theme.breakpoints.down(620)]: {
                display: "none",
              },
            })}
          >
            <CalendarMonthIcon />
            <Box sx={{ margin: "2px 0 0 4px" }}>{getDataLabel()}</Box>
          </Box>
        </Box>
        <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
          {dateValues.map((item) => {
            return (
              <StyledButton
                className={item.label === filterValue ? "active" : ""}
                onClick={onChangeFilter(item.label)}
              >
                {item.label}
              </StyledButton>
            );
          })}
          <Button
            sx={(theme) => ({
              textTransform: "capitalize",
              marginLeft: "28px !important",
              whiteSpace: "nowrap",
              [theme.breakpoints.down("sm")]: {
                marginLeft: "6px !important",
                minWidth: "auto",
                padding: "8px 12px",
              },
            })}
            variant="contained"
            color="secondary"
          >
            <FileDownloadIcon
              sx={(theme) => ({
                marginRight: "6px",
                fontSize: "20px",
                [theme.breakpoints.down("sm")]: {
                  marginRight: "0",
                },
              })}
            />{" "}
            <Box
              sx={(theme) => ({
                display: "inline",
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
              })}
            >
              Download CVS
            </Box>
          </Button>
        </Stack>
      </Box>
      <div>
        <LineChart
          xAxis={[{ scaleType: "point", data: labels }]}
          series={series}
          height={300}
          grid={{ vertical: false, horizontal: true }}
        />
      </div>
    </div>
  );
};

export default Chart;
