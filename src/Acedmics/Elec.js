import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import styles from './styles'



import elec_engg from '../assets/img/elec_engg.jpg'

const Elec = () => {
  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
   
      <Box style={{width:"100%"}}>
      <Typography variant='h2' sx={styles.contentTitle}>Electronics Engineering</Typography>
              <Box component='img' src={elec_engg} sx={styles.imgItem} /><br />
              
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
            <Typography variant="body1" sx={styles.text} style={{padding:"10px"}}> Electronics is the brain of Modern Technology”. Even the computer is an electronic device. It is an evergreen subject that provides opportunities for technicians in following areas of Engineering like Maintenance & Service, Research Assistance, Production Control, Quality Control and Marketing. Diploma in Electronics also provides many choices of subjects for higher studies like Electronics, Instrumentation, Telecommunication, Medical Electronics, Mechatronics and Computer Science. </Typography>
              
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}  style={{ padding:"25px",backgroundColor:"#e4e4ff"}}>
            <Box>
            <Typography variant='body' style={{fontSize:"26px"}}>What I can do after completing the course?</Typography>
            <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
    For those, who have finished successful diploma in Electronics and Telecommunications, numerous job opportunities are available. Many firms in the public as well as the private sector take in students from Electronics and communications. For example, the Steel Authority of Indian Limited SAIL, Civil Aviation Department, Indian Railways, Hindustan Aeronautics Limited, Indian Engineering Services IES, Indian Oil Corporation Ltd, MTNL& BSNL are some of the public sector organizations who hire graduate engineers from Electronics and Communication stream.
        </Typography>
             
            </Box>
          </Grid>
        
        
        </Grid>
      </Box>
    </Box>
  )
}

export default Elec
