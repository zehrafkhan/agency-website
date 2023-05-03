import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

//SVG ICONS AND IMAGES
import dashboardPhoto from '../assets/img/dashboard-photo.svg'


import styles from './styles'



const Elec = () => {
  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
        <Typography variant='h2'>Electronics & Telecommunication Engineering</Typography>
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
       “Electronics is the brain of Modern Technology”. Even the computer is an electronic device. It is an evergreen subject that provides opportunities for technicians in following areas of Engineering like Maintenance & Service, Research Assistance, Production Control, Quality Control and Marketing. Diploma in Electronics also provides many choices of subjects for higher studies like Electronics, Instrumentation, Telecommunication, Medical Electronics, Mechatronics and Computer Science.
        </Typography>
        <Typography variant='h2'>What I can do after completing the course?</Typography>
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
   For those, who have finished successful diploma in Electronics and Telecommunications, numerous job opportunities are available. Many firms in the public as well as the private sector take in students from Electronics and communications. For example, the Steel Authority of Indian Limited SAIL, Civil Aviation Department, Indian Railways, Hindustan Aeronautics Limited, Indian Engineering Services IES, Indian Oil Corporation Ltd, MTNL& BSNL are some of the public sector organizations who hire graduate engineers from Electronics and Communication stream.
        </Typography>
        
        
        <Typography variant='h2'>Department has sophisticated laboratories such as </Typography>
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0', lineHeight:'20px'}}
        >
   -	Communication Laboratory comprising of microwave bench used in advanced communication. Instrumentation laboratory is provided with latest digital storage oscilloscope, spectrum analyzer, servo control motors, potentiometers, stepper motors, and pressure & temperature transducers, LVDT etc. <br />

-	Industrial Electronics Laboratory is equipped with instruments like Resistance Welding demonstrator, Induction Heating demonstrator, Servo & Relay type stabilizers. 
-	Microprocessor Laboratory has number of 8085, 8086 microprocessor & 8051 microcontroller kits with LCD display with several attachments of peripherals like stepper motor, ADC, DAC, serial communication and many more. <br />

-	Electrical Engineering laboratory is equipped with 3 phase AC. motors, D.C. motors, synchronous motors, generators etc. <br />
 


        </Typography>
      </Box>
    </Box>
  )
}

export default Elec
