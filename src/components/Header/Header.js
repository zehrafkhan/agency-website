import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import Navbar from "../Navbar";
import Drawer from "../Drawer";

import logo from "../../assets/img/logo.png";
import logomob from "../../assets/img/logomob.png";
import burger_menu from "../../assets/img/burger_menu.svg";
import styles from "./styles";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="xl" sx={styles.container}>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        <Toolbar disableGutters>
          <Typography component="a" href="/" sx={styles.logoDesk}>
            <img src={logo} alt="logo" style={{width:"80%"}}/>
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'flex', lg:'none'}}}>
            <IconButton size="large" aria-label="menu" onClick={()=>setOpenDrawer(true)}>
                <img src={burger_menu} alt='burger_menu'/>
            </IconButton>
          </Box>

          <Typography component="a" href="/" sx={styles.logoMob}>
            <img src={logomob} alt="logo" style={{width:"35%", marginTop:"14px"}}/>
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', lg:'flex'}}}>
            <Navbar />
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
