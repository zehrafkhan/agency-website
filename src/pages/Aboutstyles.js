const styles = {
  hero: (theme) => ({
    padding: "20px",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
      padding: "44px 20px 20px",
    },
  }),

  wrapper: (theme) => ({
    padding: "20px",
    [theme.breakpoints.up("md")]: {
      maxWidth: "1240px",
      display: "flex",
      alingItems: "center",
      gap: "35px",
    },
  }),
  photo: {
    height:'35%',
    width:'100%',
    maxWidth: '335px',
    display: 'block',
    margin: '10px auto 0',
    borderRadius: '1%'
  },
  text: (theme) => ({
    margin: "25px 0",
    [theme.breakpoints.up("md")]: {
     marginBottom: '44px',
     
    },
  }),
};

export default styles;
