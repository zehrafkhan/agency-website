import React from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import close from '../../assets/img/close.svg'
import Navbar from '../Navbar';

const Drawer = (props) => {
    const sendData = (data) => {
        props?.sendData(data)
       }
  return (
    <MuiDrawer
    PaperProps={{
        sx: {width: '100%'}
    }}
    anchor='left'
    open={props?.open}
    onClose={props?.onClose}
    >
        <Box sx={{padding: '2px'}}>
            <IconButton onClick={props?.onClose} sx={{padding: 0, marginLeft: '5px'}}>
                <img src={close} alt='close'/>
            </IconButton>
            <Box sx={{padding: '44px'}}>
                <Navbar  sendData={sendData} />
            </Box>
        </Box>
    </MuiDrawer>
  )
}

export default Drawer