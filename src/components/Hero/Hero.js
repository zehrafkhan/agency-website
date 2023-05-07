import React from "react";
import Box from "@mui/material/Box";
import Button from "../Button";
import Typography from "@mui/material/Typography";

import photo_banner from "../../assets/img/photo_banner.jpeg";

import Fade from 'react-reveal/Fade';

import styles from "./styles";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box sx={styles.hero}>
      <Box sx={styles.wrapper}>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h2"> <Fade left>S.H JONDHALE EDUCATIONAL GROUP   </Fade></Typography>
          <Typography variant="body1" sx={styles.text}>
          “FulFill Your DREAMS Through RIGHTEOUS Education”,
          Learn how to be happy with what you have while you pursue all that you want.
          </Typography>
          <Button><Link to='/contact' style={{textDecoration:'none', color:"white"}}>join us</Link></Button>
        </Box>
        <Box component='img' src={photo_banner} sx={styles.photo} />
      </Box>
    </Box>
  );
};

export default Hero;
