import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import styles from './styles'



import digi_engg from '../assets/img/digi_engg.png'

const Mh = () => {
  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
   
      <Box style={{width:"100%"}}>
      <Typography variant='h2' sx={styles.contentTitle}>Digital Engineering</Typography>
              <Box component='img' src={digi_engg} sx={styles.imgItem} /><br />
              
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
            <Typography variant="body1" sx={styles.text} style={{padding:"10px"}}>  Now-a-days everything is going Digital way. Digital Electronics has revolutionized the electronic field by enhancing the communication efficiency. To site an example, nowadays T.V. transmission and data transmission uses the digital techniques to greater advantage. The course provides up-to-date knowledge of design, construction, operation and maintenance of all electronic equipments.
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
    For those who have finished successful diploma in Digital Electronics, numerous job opportunities are available. Many firms in the public as well as the private sector take in students from Digital Electronics. For example - BPL Limited, Bajaj Electronics, Bharat Electronics Limited BEL, The Videocon Group etc.

Department have full edged laboratories such as:

	Digital Techniques Laboratory is furnished with number of bread board trainer kits to construct various types of circuits and programmable logic controller PLC.<br />

-	Linear Integrated Circuit LIC Laboratory is full edged with numerous LIC kits used for generation, amplication & testing of various signals. Electronic Workshop Laboratory with PCB construction instruments, testing instruments and various electronic components are available. <br />

The Electronics and Telecommunication as well as Digital Electronics Department has full-

edged laboratories with instruments like Digital Storage Oscilloscope 100 Mhz, B/W TV trainer, color TV trainer, and kits for easy understanding of practical.<br /> Various types of helping instruments like CROs, Function generators, Digital multimeters, D.C. Power supplies etc are available in every laboratory in numerous numbers.<br /> Departments are equipped with Software like ORCAD for PCB designing, Electronic Simulation & Design and Special VSLI design & MATLAB laboratories.<br /> Computer Hardware & Micro- processor lab with circuit simulation software for microprocessors 8085, 8086 etc. are available.
        </Typography>
             
            </Box>
          </Grid>
        
        
        </Grid>
      </Box>
    </Box>
  )
}

export default Mh
