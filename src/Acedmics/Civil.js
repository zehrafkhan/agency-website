import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import styles from './styles'



import civil_engg from '../assets/img/civil_engg.jpg'

const Civil = () => {
  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
   
      <Box style={{width:"100%"}}>
      <Typography variant='h2' sx={styles.contentTitle}>Civil Engineering</Typography>
              <Box component='img' src={civil_engg} sx={styles.imgItem} /><br />
              
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
            <Typography variant="body1" sx={styles.text} style={{padding:"10px"}}> This course aims at producing highly quailed, efficient technicians capable of meeting the requirements of the basic level of the Civil Engineering eld. During the course of study, the student is exposed to various subjects of Civil Engineering such as Planning, Drafting (both manual and computer –aided), Surveying, Estimation & Costing, Construction Technology, Basics of Highway, Railway, Bridge, Airport, Tunnel and Harbor Engineering.
The course also offers adequate exposure to Reinforced Concrete Structures, Quality Control, Material Testing, Construction Management & Entrepreneurship, Professional Practice and Office Procedures. Students also get a feel of Extensive Survey, Building Drawing, Irrigation & Bridge Drawing and Structural Engineering Drawing. Students are also exposed to software like AUTOCAD & STAAD.
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
  At present good placement opportunities are available for diploma holders in the    eld of Civil Engineering, both in Government & Private Sectors. They can be absorbed as site engineers involved in supervision, draftsman (with computer knowledge), surveyors, and personnel in-charge of quality control, estimation work and office procedures. They can establish their own consultancy in the civil engineering and construction elds or become Licensed Class I Contractors.

Department has various sophisticated and well equipped laboratories such as:

1- Fluid Mechanics & Machinery<br />	2- Hydraulics<br />

3- Surveying<br />	4- Engineering Mechanics<br />

5- Mechanics of Structures<br />	6- Strength of Material<br />

7- Concrete Technology<br />	8- Soil Mechanics<br />
 

        </Typography>
             
            </Box>
          </Grid>
        
        
        </Grid>
      </Box>
    </Box>
  )
}

export default Civil
