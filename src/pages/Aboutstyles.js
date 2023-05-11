const styles = {
  hero:(theme)=>({
    padding: '44px 20px',
    display: 'flex',
    justifyContent: 'center',
    textAling: 'center',
    background: '#F5F5F5',
    [theme.breakpoints.up('sm')]: {
        textAling: 'left',
    },
    [theme.breakpoints.up('sm')]: {
        padding: '21px 20px',
    },
}),

  wrapper:  {
    maxWidth: '1240px',
},
  imgItem: (theme)=>({
    justifyContent: 'center',
    width: '100%',
    marginTop: '24px',
    marginBottom: "30px",
    maxWidth: '608px',
    [theme.breakpoints.up('sm')]: {
        marginTop: '33px',
        marginLeft:"324px",
        justifyContent: 'center',
    },
}),
contentTitle: (theme) => ({
  fontSize: '25px',
  lineHeight: '25px',
  marginTop: '12px',
  maxWidth: '402px',
  textAlign: 'left',
  margin: '12px auto 0',
  ...theme.typography.someStyles,
  [theme.breakpoints.up('sm')]: {
    fontSize: '31px',
    lineHeight: '29px',
  },
  
}),
  // photo: {
  //   height:'35%',
  //   width:'100%',
  //   maxWidth: '335px',
  //   display: 'flex',
  //   margin: '10px auto 0',
  //   borderRadius: '1%'
  // },
  text: (theme) => ({
    margin: "25px 0",
    [theme.breakpoints.up("md")]: {
     marginBottom: '44px',
     
    },
  }),
};

export default styles;
