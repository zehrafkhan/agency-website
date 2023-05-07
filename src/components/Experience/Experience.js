import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'

//SVG ICONS AND IMAGES
import industrial_visit  from '../../assets/img/industrial_visit.jpg'
import Event from '../../assets/img/Event.JPG'
import seminar from '../../assets/img/seminar.jpg'
import last_practical from '../../assets/img/last_practical.jpg'


import styles from './styles'

const links = [
"Show all",

]

const Experience = () => {
  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
        <Typography variant='h2'>Recent Events</Typography>
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
   Memory is a way of holding on to the things you love, the things you are, the things you never want to lose.

        </Typography>
        <Box sx={styles.links}>
          {links.map((link, index) => {
            return (
              <Link key={index} sx={styles.links}>
                {link}
              </Link>
            )
          })}
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent='center'
        >
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box component='img' src={industrial_visit} sx={styles.imgItem} />
              <Typography sx={styles.contentTitle}>Industrial Visit</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box component='img' src={Event} sx={styles.imgItem} style={{height:"300px"}} />
              <Typography sx={styles.contentTitle}>Technomania 2023 Event</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box
                component='img'
                src={seminar}
                sx={styles.imgItem}
              />
              <Typography sx={styles.contentTitle}>
              career guidance Seminar 2023
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box
                component='img'
                src={last_practical}
                sx={styles.imgItem}
              />
              <Typography sx={styles.contentTitle}>
                Last Day Of Practical Examination
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Experience
