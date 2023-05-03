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
        width: '100%',
        marginTop: '24px',
        maxWidth: '403px',
        [theme.breakpoints.up('sm')]: {
            marginTop: '44px',
        },
    }),
    contentTitle: (theme) => ({
        fontSize: '14px',
        lineHeight: '17px',
        marginTop: '12px',
        maxWidth: '402px',
        textAlign: 'left',
        margin: '12px auto 0',
        ...theme.typography.someStyles,
        [theme.breakpoints.up('sm')]: {
          fontSize: '24px',
          lineHeight: '29px',
        },
      }),
}

export default styles