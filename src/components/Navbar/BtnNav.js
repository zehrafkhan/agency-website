import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from '@mui/material'
import DropDown from './DropDown'

import styles from './styles'

const BtnNav = (props) => {
  const onHandleClose = () => {
    props?.sendData(false)
  }
  return (
    <>
      {props?.page.arrow ? (
        <DropDown sendData={onHandleClose} page={props?.page} />
      ) : (
        <Link
        onClick={onHandleClose}
          component={NavLink}
          to={props?.page?.link}
          sx={styles.btnLink}
          style={({ isActive }) =>
            isActive ? { color: '#777FEB' } : undefined
          }
        >
          {props?.page.title}
        </Link>
      )}
    </>
  )
}

export default BtnNav
