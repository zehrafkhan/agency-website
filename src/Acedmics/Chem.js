import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import styles from './styles'



import chem_engg from '../assets/img/chem_engg.jpeg'

const Chem = () => {
  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
   
      <Box style={{width:"100%"}}>
      <Typography variant='h2' sx={styles.contentTitle}>Chemical Engineering</Typography>
              <Box component='img' src={chem_engg} sx={styles.imgItem} /><br />
              
            </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 4, md: 4 }}
          justifyContent='center'
        >
           
          <Grid item xs={6} sm={4} md={4} style={{backgroundColor:"#ffeafc"}}>
            <Box>
            <Typography variant='body' sx={styles.contentTitle} style={{marginLeft:"12px"}}>About Course</Typography>
            <Typography variant="body1" sx={styles.text} style={{padding:"10px"}}> The organization chart in the present era of chemical and other continuous processing plants like beverages, oils, paints etc shows that the Chemical engineers are leading than the others. Also a huge gap can be seen between the top level management executives and the workers. The students passing this diploma course have a vital role in filling up this gap between top level officer and the base level labor. </Typography>
              
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}  style={{ padding:"25px",backgroundColor:"#e4e4ff"}}>
            <Box>
            <Typography variant='body' style={{fontSize:"26px"}}>What I can do after completing the course?</Typography>
            <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
   There is good scope in the eld of Chemical Engineering especially Most of the opportunities will be in manufacturing, pharmaceutical companies, Steel plant, HPCL, NTPC and in other industrial areas. They are also required in the defense sector and atomic centers. They also have the option to enter in to the research eld.
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
          </Grid>
        
        
        </Grid>
      </Box>
    </Box>
  )
}

export default Chem
