import { Box } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const data = [
  { count: 2100, label: "Total sessions", direction: "up", percent: "14" },
  { count: 1228, label: "Total visitors", direction: "down", percent: "3" },
  { count: 6.92, label: "Time spent, HR", direction: "up", percent: "1" },
  {
    count: 2.3,
    label: "Avg requests received",
    direction: "up",
    percent: "21",
  },
];

const Card = styled("div")<{ isActive: boolean; isIncrease: boolean }>(
  ({ theme, isActive, isIncrease }) => ({
    transition: "all 235ms ease-out",
    cursor: "pointer",
    backgroundColor: isActive ? theme.palette.primary.dark : "#ffffff",
    color: isActive ? theme.palette.primary.contrastText : "inherit",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "22px",
    height: isActive ? 180 : 130,
    borderRadius: "0 0 20px 20px",
    "& *": {
      transition: "font-size 85ms ease-out",
    },
    "& svg": {
      marginRight: 3,
      fontSize: 11,
      transform: `rotate(${isIncrease ? "180" : "0"}deg)`,
    },
    [theme.breakpoints.down("sm")]: {
      borderRadius: "20px",
      height: "auto",
      padding: "16px",
    },
  })
);

const Statistics = () => {
  const [activeTab, setActiveTab] = useState(0);

  const onSelectTab = (index: number) => () => {
    setActiveTab(index);
  };

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        gap: "22px",
        paddingBottom: "12px",
        height: "180px",
        [theme.breakpoints.down("sm")]: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          paddingTop: "22px",
          height: "auto",
        },
      })}
    >
      {data.map((item, index) => {
        const isIncrease = item.direction === "up";
        const isActive = activeTab === index;
        return (
          <Card
            isActive={isActive}
            isIncrease={isIncrease}
            key={item.label}
            onClick={onSelectTab(index)}
          >
            <Box>
              <Box
                sx={(theme) => ({
                  fontSize: isActive ? 26 : 24,
                  fontWeight: 500,
                  [theme.breakpoints.down("sm")]: {
                    fontSize: 22,
                  },
                })}
              >
                {item.count}
              </Box>
              <Box
                sx={(theme) => ({
                  fontSize: isActive ? 14 : 12,
                  color: theme.palette.secondary.contrastText,
                  [theme.breakpoints.down("sm")]: {
                    fontSize: 10,
                  },
                })}
              >
                {item.label}
              </Box>
            </Box>
            <Box
              sx={{
                fontWeight: 500,
                color: isActive
                  ? "inherit"
                  : isIncrease
                  ? "#4bd77a"
                  : "#e35d5d",
              }}
            >
              <SouthIcon /> {isIncrease ? "+" : "-"} {item.percent}%
            </Box>
          </Card>
        );
      })}
    </Box>
  );
};

export default Statistics;
