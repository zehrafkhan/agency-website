import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

//SVG ICONS AND IMAGES
import dashboardPhoto from '../assets/img/dashboard-photo.svg'


import styles from './styles'



const Co = () => {
  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
        <Typography variant='h2'>Computer Engineering</Typography>

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
       The students are exposed to Basics of Computers, Microprocessor, and software like C, C++, Java, VB, LINUX, Database Management Systems, Web Technology, Multimedia and the latest .NET software. In addition they are also exposed to PC Hardware, Maintenance and Networking. On completion of Diploma in Computer Science, plenty of career opportunities exist in the IT industry. The students can find openings as software engineers, system developers and programmers. They get sufficient opportunity to learn PC hardware so that they can become Hardware Engineers. They can become network engineers. They are eligible for the Apprenticeship training program in HAL, NAL, etc. Infinte opportunities in the field of Web and Multimedia designing are available for Diploma holders.
        </Typography>
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
        <Typography variant='h2'>What I can do after completing the course?</Typography>
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
    On completion of Diploma in Computer Science, plenty of career opportunities exist in the IT industry. The students can and openings as software engineers, system developers and programmers. They get sufficient opportunity to learn PC hardware so that they can become Hardware Engineers. They can become network engineers. They are eligible for the Apprenticeship training program in HAL, NAL, etc. Infinite opportunities in the field of Web and Multimedia designing are available for Diploma holders. 
        </Typography>
        
        <Typography variant='h2'>The Department has 7 different laboratories comprising of </Typography>
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0', lineHeight:'20px'}}
        >
    -	Well-furnished Computer Center with 20 P-IV computers accessible to staff & students with unlimited Internet facility using 64 KBs/256 KBs/512 KBs broadband.<br />
-	Full edged Computer laboratory having 20 P-IV computers with peripherals like web cam, manageable switches, routers, access points, wireless 

network, printers, scanners, mike, headphones etc.<br /> 

-	Computer Software lab with 20 P-IV computers having licensed software such as Oracle, Visual basic, NET, Computer Hardware & Microprocessor lab having Circuit Simulation software such as Circuit Maker and TASM, MASM for Microprocessor 8085, 8086 with different interfacing.<br /> 

-	Computer Graphics lab with latest software’s for image processing using Photoshop, Corel-Draw, and Paint-shop etc. Computer Design Lab is used to implement the innovative and engineering ideas to implement real time system and application software.<br />
	
-	Two Computer centers with 20 P-IV computers each are devoted for rst year students to get acquainted with computer fundamentals.<br />

        </Typography>
      </Box>
    </Box>
  )
}

export default Co
