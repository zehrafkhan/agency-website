const styles = {
    experience: (theme)=>({
        padding: '44px 20px',
        display: 'flex',
        justifyContent: 'center',
        textAling: 'center',
        background: '#F5F5F5',
        [theme.breakpoints.up('sm')]: {
            textAling: 'left',
        },
        [theme.breakpoints.up('sm')]: {
            padding: '88px 20px',
        },
    }),
    wrapper: {
        maxWidth: '1240px',
    },
    links: (theme)=>({
        flexGrow:1,
        display: 'flex',
       flexWrap: 'wrap',
       maxWidth: '240px',
        gap: '20px',
        [theme.breakpoints.up('sm')]: {
            gap: '40px',
            maxWidth: '100%',
        },
    }),
    imgItem: (theme)=>({
        justifyContent: 'center',
        width: '100%',
        marginTop: '24px',
        marginBottom: "30px",
        maxWidth: '447px',
        [theme.breakpoints.up('sm')]: {
            marginTop: '44px',
            marginLeft:"400px",
            justifyContent: 'center',
        },
    }),
    text: (theme) => ({
        margin: "25px 0",
        [theme.breakpoints.up("md")]: {
         marginBottom: '44px',
         
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

      
}

export default styles