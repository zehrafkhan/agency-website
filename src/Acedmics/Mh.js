import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import styles from './styles'



import mech_engg from '../assets/img/mech_engg.jpg'

const Mh = () => {
  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
   
      <Box style={{width:"100%"}}>
      <Typography variant='h2' sx={styles.contentTitle}>Mechanical  Engineering</Typography>
              <Box component='img' src={mech_engg} sx={styles.imgItem} /><br />
              
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
            <Typography variant="body1" sx={styles.text} style={{padding:"10px"}}>  The Students are exposed to Mechanical drafting, Designing, Modification of existing design, Estimating & Costing, Operating of various machines and their maintenance. They also get adequate vexposure to latest technology such as Mechatronics, CAD/CAM & Robotics and CNC. 

 </Typography>
              
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}  style={{ padding:"25px",backgroundColor:"#e4e4ff"}}>
            <Box>
            <Typography variant='body' style={{fontSize:"26px"}}>What I can do after completing the course?</Typography>
            <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
    The Diploma Holders can be absorbed as Apprentice Trainees in reputed Public Sector / Private Sector companies. After completion of the training, they will be placed as maintenance / production engineers. They can acquire additional qualication and thus reach higher levels in the company. They are also trained to start their own business.
        </Typography>
             
            </Box>
          </Grid>
        
        
        </Grid>
      </Box>
    </Box>
  )
}

export default Mh
