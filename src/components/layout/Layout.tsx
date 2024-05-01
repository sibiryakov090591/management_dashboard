import { PropsWithChildren, FC } from "react";
import { styled } from "@mui/material/styles";
import Menu from "./components/Menu";
import { Box } from "@mui/material";

const StyledWrapper = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  paddingLeft: "65px",
  color: "#596c7e",
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "55px",
  },
}));

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledWrapper>
      <Menu />
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {children}
      </Box>
    </StyledWrapper>
  );
};

export default Layout;
