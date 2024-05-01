import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../styles.css";
import icon_windows from "../../../../assets/images/window.png";
import icon_stack from "../../../../assets/images/Stack_Overflow.png";
import icon_chrome from "../../../../assets/images/Google_Chrome.png";
import icon_outlook from "../../../../assets/images/Outlook.png";
import { FreeMode } from "swiper/modules";
import { Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";

const data = [
  {
    icon: icon_windows,
    title: "Windows",
    subTitle: "Top platform",
    count: 1883,
  },
  {
    icon: icon_stack,
    title: "Stack Overflow",
    subTitle: "Top sources",
    count: 420,
  },
  { icon: icon_chrome, title: "Chrome", subTitle: "Top browser", count: 2010 },
  { icon: icon_outlook, title: "Outlook", subTitle: "Top mailer", count: 326 },
];

const Card = styled("div")(({ theme }) => ({
  cursor: "pointer",
  backgroundColor: "#ffffff",
  padding: "22px 10px 22px 22px",
  height: 100,
  width: 205,
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "start",
  "& svg": { color: theme.palette.secondary.contrastText },
  [theme.breakpoints.down("sm")]: {
    height: 80,
    width: 185,
  },
}));

const CustomSlider = () => {
  return (
    <Box
      sx={(theme) => ({
        width: "65vw",
        [theme.breakpoints.down("md")]: {
          width: "auto",
        },
      })}
    >
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <Card>
                <Box display="flex" alignItems="center" gap="12px">
                  <Box sx={{ width: "35px" }}>
                    <img
                      style={{ width: "100%" }}
                      src={item.icon}
                      alt={item.title}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Box
                      sx={(theme) => ({
                        fontSize: 12,
                        fontWeight: 500,
                        color: theme.palette.secondary.contrastText,
                      })}
                    >
                      {item.subTitle}
                    </Box>
                    <Box
                      sx={() => ({
                        fontSize: 14,
                        fontWeight: 500,
                      })}
                    >
                      {item.title}
                    </Box>
                  </Box>
                  <MoreVertIcon />
                </Box>
                <Box
                  sx={{
                    fontSize: 12,
                    fontWeight: 600,
                    "& span": { fontSize: 20 },
                  }}
                >
                  <span>{item.count}</span> / sessions
                </Box>
              </Card>
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <Box sx={{ width: 100 }}></Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default CustomSlider;
