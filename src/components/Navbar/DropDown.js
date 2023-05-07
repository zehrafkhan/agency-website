import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import arrow from '../../assets/img/chevron-down.svg'
import styles from './styles'
import { Link } from 'react-router-dom'

export default function BasicMenu({ page }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        disableRipple
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={styles.btnLink}
      >
        {page.title} <img src={arrow} alt='arrow' />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      
      >
        <MenuItem onClick={handleClose} >  <Link to='/co'   style={{textDecoration:'none', color:'black'}}>Computer Engineering</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/civil'  style={{textDecoration:'none', color:'black'}}>Civil Engineering</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/mh'  style={{textDecoration:'none', color:'black'}}>Mechenical Engineering</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/elec'  style={{textDecoration:'none', color:'black'}}>Electronic Engineering</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='chem'  style={{textDecoration:'none', color:'black'}}>Chemical Engineering</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/digi'  style={{textDecoration:'none', color:'black'}}>Digital Engineering</Link></MenuItem>
      </Menu>
    </div>
  )
}
