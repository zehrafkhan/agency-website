import { createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});
const theme = createTheme({
  palette: {
    primary: {
      main: "#686868",
    },
    slateBlue: {
      main: "#777FEB",
    },
  },

  typography: {
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "39px",
      color: "#000000",
      [breakpoints.up("md")]: {
        fontSize: "64px",
        lineHeight: "78px",
      },
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "29px",
      color: "#000000",
    },

    body1: {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "17px",
        color: '#686868',
        [breakpoints.up("md")]: {
          fontSize: "24px",
          lineHeight: "29px",
          fontWeight: 500,
        },
      },

  },
});

export default theme;
