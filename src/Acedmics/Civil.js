import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

//SVG ICONS AND IMAGES
import dashboardPhoto from '../assets/img/dashboard-photo.svg'


import styles from './styles'



const Civil = () => {
  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
        <Typography variant='h2'>Civil Engineering</Typography>
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
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
     This course aims at producing highly quailed, efficient technicians capable of meeting the requirements of the basic level of the Civil Engineering eld. During the course of study, the student is exposed to various subjects of Civil Engineering such as Planning, Drafting both manual and computer –aided, Surveying, Estimation & Costing, Construction Technology, Basics of Highway, Railway, Bridge, Airport, Tunnel and Harbor Engineering.

The course also offers adequate exposure to Reinforced Concrete Structures, Quality Control, Material Testing, Construction Management & Entrepreneurship, Professional Practice and Office Procedures. Students also get a feel of Extensive Survey, Building Drawing, Irrigation & Bridge Drawing and Structural Engineering Drawing. Students are also exposed to software like AUTOCAD & STAAD.

        </Typography>
        <Typography variant='h2'>What I can do after completing the course?</Typography>
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
    At present good placement opportunities are available for diploma holders in the    eld of Civil Engineering, both in Government & Private Sectors. They can be absorbed as site engineers involved in supervision, draftsman with computer knowledge, surveyors, and personnel in-charge of quality control, estimation work and office procedures. They can establish their own consultancy in the civil engineering and construction elds or become Licensed Class I Contractors.

Department has various sophisticated and well equipped laboratories such as:

1- Fluid Mechanics & Machinery	2- Hydraulics<br />

3- Surveying	4- Engineering Mechanics<br />

5- Mechanics of Structures	6- Strength of Material<br />

7- Concrete Technology	8- Soil Mechanics<br />

        </Typography>
        
        
       
      </Box>
    </Box>
  )
}

export default Civil
