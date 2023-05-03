import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

//SVG ICONS AND IMAGES
import dashboardPhoto from '../assets/img/dashboard-photo.svg'


import styles from './styles'



const Mh = () => {
  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
        <Typography variant='h2'>Mechanical  Engineering</Typography>
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
    The Students are exposed to Mechanical drafting, Designing, Modification of existing design, Estimating & Costing, Operating of various machines and their maintenance. They also get adequate vexposure to latest technology such as Mechatronics, CAD/CAM & Robotics and CNC. 
The Diploma Holders can be absorbed as Apprentice Trainees in reputed Public Sector / Private Sector companies. After completion of the training, they will be placed as maintenance / production engineers. They can acquire additional qualification and thus reach higher levels in the company. They are also trained to start their own business.

        </Typography>
        <Typography variant='h2'>What I can do after completing the course?</Typography>
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
    The Diploma Holders can be absorbed as Apprentice Trainees in reputed Public Sector / Private Sector companies. After completion of the training, they will be placed as maintenance / production engineers. They can acquire additional qualication and thus reach higher levels in the company. They are also trained to start their own business.
        </Typography>
        
        
  
        <Typography variant='h2'>Department has various full edged laboratories like:</Typography>
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0', lineHeight:'20px'}}
        >
    -	Theory of Machine Lab<br />

-	Thermal Engineering Lab<br /> 

-	Internal Combustion Engine Lab<br /> 

-	Fluid Mechanics And Hydraulic Machinery Lab<br /> 

-	Metrology & Quality Control Lab<br /> 

-	Refrigeration & Air Conditioning Lab<br />   

        </Typography>

        <Typography variant='h2'>Workshop</Typography>
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0', lineHeight:'20px'}}
        >
  Polytechnic has its separate and spacious building for workshop furnished with necessary machines & tools. It is sub grouped into carpentry shop, pattern making shop, sheet metal shop, plumbing shop, welding shop, fitting shop, machine shop, black smithy shop & foundry shop. Skilled team of instructors is assigned with the workshop activities and the students learn hand-skills on shop floors & get acquainted with different tools & manufacturing process.    

        </Typography>
      </Box>
    </Box>
  )
}

export default Mh
