import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
//SVG ICONS AND IMAGES
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'


import styles from './styles'

const services = [
  'Students support',
  'Ac Labs',
  'Library',
  'Well Maintained Classrooms',
  'Auditorium',
]

const links = [
 <Link to='https://mahadbt.maharashtra.gov.in/'>'maharastra.gov.in'</Link> ,
 <Link to='https://msbte.org.in/'>'msbte.org.in'</Link> ,

]

const follow = [
  { title: 'instagram', img: <InstagramIcon sx={styles.icon} /> },
  { title: 'twitter', img: <TwitterIcon sx={styles.icon} /> },
  { title: 'facebook', img: <FacebookIcon sx={styles.icon} /> },
  
]

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={styles.gridWrapper}
      >
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant='h3' sx={styles.linkTitle}>
              services
            </Typography>
            <List>
              {services.map((item, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {item}
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant='h3' sx={styles.linkTitle}>
              links
            </Typography>
            <List>
              {links.map((item, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                   {item} 
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Box>
            <Typography variant='h3' sx={styles.linkTitle}>
              follow
            </Typography>
            <List>
              {follow.map((item, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {typeof item.img === 'string' ? (
                      <Box component='img' src={item.img} />
                    ) : (
                      item.img
                    )}
                    <Box component='span' sx={{ marginLeft: '5px' }}>
                      {item.title}
                    </Box>
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={4} sx={styles.emailBlock}>
          <Box sx={styles.subscribeFooter}>
            <Typography variant='h3' sx={styles.title}>
              subscribe our newsletter
            </Typography>
            <Typography sx={styles.text}>
              To get latest Information ,{' '}
              <Link sx={{ color: '#777FEB' }}> subscribe </Link>
              and get added to our jondhale team.{' '}
            </Typography>
            <Paper component='form' sx={styles.paper}>
              <InputBase sx={styles.inputBase} placeholder='Email address' />
              <Button sx={styles.btn}>sign up</Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
