import React from 'react'
import { Box } from '@mui/material'

import BtnNav from './BtnNav'

const pages = [
  { title: 'About', arrow: false, link: '/about' },
  { title: 'Services', arrow: false, link: '/services' },
  { title: 'Admission', arrow: false, link: '/admission' },
  { title: 'Acedmics', arrow: true },
  { title: 'Events', arrow: false, link: '/pages' },
  { title: 'Contact', arrow: false, link: '/contact' },
]

const Navbar = () => {
  return (
    <Box
      sx={{ flexGrow: 1, display: { lg: 'flex' }, justifyContent: 'flex-end' }}
    >
      {pages.map((page, index) => (
        <BtnNav page={page} key={index} />
      ))}
    </Box>
  )
}

export default Navbar
