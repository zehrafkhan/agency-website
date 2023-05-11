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
      fontFamily: 'Lato, sans-serif',
      fontWeight: 700,
      fontSize: "25px",
      lineHeight: "30px",
      color: "#000000",
      [breakpoints.up("md")]: {
        fontSize: "35px",
        lineHeight: "78px",
      },
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: "21px",
      lineHeight: "29px",
      color: "#000000",
    },

    
    body1: {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "21px",
        color: '#686868',
        [breakpoints.up("md")]: {
          fontSize: "24px",
          lineHeight: "29px",
          fontWeight: 500,
        },
      },
      someStyles: {
        fontFamily: 'Montserrat,sans-serif',
        textTransform: 'capitalize',
      },
  },
  components: {
    // Name of the component
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: '0.5px solid #777FEB',
        },
        root: {
          borderRadius: '8px',
          color: '#000',
          fontSize: '16px',
          lineHeight: '20px',
          fontWeight: 500,
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #777FEB',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #777FEB',
          },
        },
      },
    },
  },
});

export default theme;
