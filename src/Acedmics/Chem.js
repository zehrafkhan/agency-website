import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

//SVG ICONS AND IMAGES
import dashboardPhoto from '../assets/img/dashboard-photo.svg'


import styles from './styles'



const Chem = () => {
  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
        <Typography variant='h2'>Chemical Engineering</Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent='center'
        >
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box component='img' src={dashboardPhoto} sx={styles.imgItem} />
              <Typography sx={styles.contentTitle}>dashborad design</Typography>
            </Box>
          </Grid>
        </Grid>
        <br />
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
      The organization chart in the present era of chemical and other continuous processing plants like beverages, oils, paints etc shows that the Chemical engineers are leading than the others. Also a huge gap can be seen between the top level management executives and the workers. The students passing this diploma course have a vital role in filling up this gap between top level officer and the base level labor.
        </Typography>
        <Typography variant='h2'>What I can do after completing the course?</Typography>
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
   There is good scope in the eld of Chemical Engineering especially Most of the opportunities will be in manufacturing, pharmaceutical companies, Steel plant, HPCL, NTPC and in other industrial areas. They are also required in the defense sector and atomic centers. They also have the option to enter in to the research eld.
        </Typography>
        
        
        <Typography variant='h2'>Department has various sophisticated and well equipped laboratories such as </Typography>
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0', lineHeight:'20px'}}
        >
    -	Mass Transfer Lab<br />

-	Heat Transfer Lab<br /> 

-	Environmental Lab <br />

-	Plant Operation Lab<br />

-	Process Instrumentation and Control Lab <br />

-	Advanced Chemistry Lab <br />

-	Chemical Process Technology Lab <br />

-	Mechanical Operations Lab <br />


        </Typography>
      </Box>
    </Box>
  )
}

export default Chem
