import { useState } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import BuildIcon from "@mui/icons-material/Build";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const pages = [
  { name: "main", label: "Main page", link: "/", icon: <HomeIcon /> },
  { name: "page_1", label: "Page 1", link: "/page-1", icon: <BuildIcon /> },
  { name: "page_2", label: "Page 2", link: "/page-2", icon: <InboxIcon /> },
  { name: "page_3", label: "Page 3", link: "/page-3", icon: <MailIcon /> },
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& > div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  "& a": {
    position: "relative",
    textDecoration: "none",
    color: "inherit",
    "&.active > div": {
      background: theme.palette.primary.light,
      "&:before": {
        content: "''",
        display: "block",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: 3,
        borderRadius: 3,
        background: theme.palette.primary.dark,
      },
    },
  },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = (value: boolean) => () => {
    setOpen(value);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerToggle(!open)}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>

      <nav>
        <List>
          {pages.map((page) => (
            <ListItem key={page.name} disablePadding sx={{ display: "block" }}>
              <NavLink to={page.link}>
                <ListItemButton
                  onClick={handleDrawerToggle(false)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {page.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={page.label}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </nav>

      <List>
        <ListItemButton
          onClick={handleDrawerToggle(false)}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <QuestionAnswerIcon />
          </ListItemIcon>
          <ListItemText primary={"Page 4"} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Menu;
