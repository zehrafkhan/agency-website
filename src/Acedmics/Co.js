import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import styles from './styles'



import co_engg from '../assets/img/co_engg.jpg'

const Co = () => {
  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
   
      <Box style={{width:"100%"}}>
      <Typography variant='h2' sx={styles.contentTitle}>Computer Engineering</Typography>
              <Box component='img' src={co_engg} sx={styles.imgItem} /><br />
              
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
            <Typography variant="body1" sx={styles.text} style={{padding:"10px"}}> The students are exposed to Basics of Computers, Microprocessor, and software like C, C++, Java, VB, LINUX, Database Management Systems, Web Technology, Multimedia and the latest .NET software. In addition they are also exposed to PC Hardware, Maintenance and Networking. On completion of Diploma in Computer Science, plenty of career opportunities exist in the IT industry. The students can find openings as software engineers, system developers and programmers. They get sufficient opportunity to learn PC hardware so that they can become Hardware Engineers. </Typography>
              
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}  style={{ padding:"25px",backgroundColor:"#e4e4ff"}}>
            <Box>
            <Typography variant='body' style={{fontSize:"26px"}}>What I can do after completing the course?</Typography>
            <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
   On completion of Diploma in Computer Science, plenty of career opportunities exist in the IT industry. The students can and openings as software engineers, system developers and programmers. They get sufficient opportunity to learn PC hardware so that they can become Hardware Engineers. They can become network engineers. They are eligible for the Apprenticeship training program in HAL, NAL, etc. Infinite opportunities in the field of Web and Multimedia designing are available for Diploma holders. 

        </Typography>
             
            </Box>
          </Grid>
        
        
        </Grid>
      </Box>
    </Box>
  )
}

export default Co
