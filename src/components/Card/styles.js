const styles = {
  card: (theme) => ({
    textAling: "left",
    border: `0.5px solid ${theme.palette.slateBlue.main}`,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    padding: "44px",
    width: "404px",
    boxSizing: "border-box",
  //   '&:hover':{
  //     margin:'5px'
  // },
    [theme.breakpoints.up("md")]: {
      maxWidth: "309px",
    },
  }),
  btn: (theme) => ({
    fontFamily: "Montserrat, sans-sarif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    textDecorationLine: "underline",
    textTransform: "capitalize",
    color: theme.palette.slateBlue.main,
  }),
  listItem: (theme) => ({
    fontFamily: "Montserrat, sans-sarif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    padding: '12px 0',
  }),
}
export default styles;
