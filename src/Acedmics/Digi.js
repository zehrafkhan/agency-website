import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

//SVG ICONS AND IMAGES
import dashboardPhoto from '../assets/img/dashboard-photo.svg'


import styles from './styles'



const Digi = () => {
  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
        <Typography variant='h2'>Digital Engineering</Typography>
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
      
Now-a-days everything is going Digital way. Digital Electronics has revolutionized the electronic field by enhancing the communication efficiency. To site an example, nowadays T.V. transmission and data transmission uses the digital techniques to greater advantage. The course provides up-to-date knowledge of design, construction, operation and maintenance of all electronic equipments.

        </Typography>
        <Typography variant='h2'>What I can do after completing the course?</Typography>
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
  For those who have finished successful diploma in Digital Electronics, numerous job opportunities are available. Many firms in the public as well as the private sector take in students from Digital Electronics. For example - BPL Limited, Bajaj Electronics, Bharat Electronics Limited BEL, The Videocon Group etc.

Department have full edged laboratories such as:

	Digital Techniques Laboratory is furnished with number of bread board trainer kits to construct various types of circuits and programmable logic controller PLC.

Ÿ	Linear Integrated Circuit LIC Laboratory is full edged with numerous LIC kits used for generation, amplication & testing of various signals. Electronic Workshop Laboratory with PCB construction instruments, testing instruments and various electronic components are available. 

The Electronics and Telecommunication as well as Digital Electronics Department has full-

edged laboratories with instruments like Digital Storage Oscilloscope 100 Mhz, B/W TV trainer, color TV trainer, and kits for easy understanding of practical. Various types of helping instruments like CROs, Function generators, Digital multimeters, D.C. Power supplies etc are available in every laboratory in numerous numbers. Departments are equipped with Software like ORCAD for PCB designing, Electronic Simulation & Design and Special VSLI design & MATLAB laboratories. Computer Hardware & Micro- processor lab with circuit simulation software for microprocessors 8085, 8086 etc. are available.

        </Typography>
        
       
      
      </Box>
    </Box>
  )
}

export default Digi
