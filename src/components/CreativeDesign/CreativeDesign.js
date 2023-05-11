import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";
// import strategy_svg from "../../assets/img/strategy.svg";
// import design_svg from "../../assets/img/vector-art-and-design-svgrepo-com.svg";

import mech from "../../assets/img/mech.png";
import software_development from "../../assets/img/software_development.png";
import digi from "../../assets/img/digi.png";
import engineering from "../../assets/img/engineering.png";
import civil from "../../assets/img/civil.png";
import search from "../../assets/img/search.png";

import Card from "../Card";
import styles from "./styles";
import Fade from 'react-reveal/Fade';


const data = [
  { title: "Civil Engineering", svg: civil, link: '/civil'},
  { title: "Computer Engineering", svg: software_development, link: '/co'},
  { title: "Electronics and Telecommunication", svg: engineering, link: '/elec' },
  { title: "Mechenical Engineering", svg: mech, link: '/mh'  },
  { title: "Chemical Engineering", svg: search, link: '/chem' },
  { title: "Digital Electronics", svg: digi, link: '/digi' },
];

const CreativeDesign = () => {
  return (
    <Box sx={styles.creativDesign}>
      <Box sx={styles.wrapper}>
        <Typography variant="h2"><Fade left>Cources We Have Offered..!! </Fade></Typography>
        <Typography
          variant="body1"
          sx={{ textTransform: "capitalize", margin: "25px 0" }}
        >
          To make nation proud by imparting knowledge to the masses. {""}
        </Typography>
        <Stack sx={styles.stack}>
          {data.map((item, index) => {
            return <Card title={item.title} imgSrc={item.svg} link={item.link}  key={index} />;
          })}
        </Stack>
       
      </Box>
    </Box>
  );
};

export default CreativeDesign;
