import React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import clg_pic from "../assets/img/clg_pic.jpeg";

import Fade from 'react-reveal/Fade';

import styles from "./Aboutstyles";
import { Grid } from "@mui/material";

const About = () => {
  return (
    <Box sx={styles.hero}>
      <Box sx={styles.wrapper}>
      
      <Box style={{width:"100%"}}>
      <Typography variant='h3' sx={styles.contentTitle}><Fade left>History of S.H Jondhale</Fade></Typography>
              <Box component='img' src={clg_pic} sx={styles.imgItem} /><br />
              
            </Box>
      <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 2, sm: 2, md: 2 }}
          justifyContent='center'
        >
           <Grid item xs={4} sm={4} md={4} style={{backgroundColor:"#ffeafc"}}>
            <Box>
            <Typography variant='body' sx={styles.contentTitle} style={{marginLeft:"12px"}}>“Imparting Quality Education to all sections of the Society” </Typography>
            <Typography variant="body1" sx={styles.text} style={{padding:"10px"}}> SHJP was founded in year 1984 and had been serving society for more than 25 years now. We have a strong students base since then, and by now more than 10,000 diploma holders has passed out from the institute and spread all over the world.They have been spread across different elds such as education, industry, trade etc.

Believing strongly in the motto “technology for prosperity” the college has achieved an enviable status due to a strong emphasis on academic and technical excellence. S. H. Jondhale Polytechnic emphasis on grooming leaders who are not only academically brilliant, but also good human beings with values under the eminent guidance of Trustee & Director of Samarth Samaj, Hon’ble Mr. Sagar Shivajirao Jondhale.

S.H. Jondhale Polytechnic has a huge campus with its own administrative offices, spacious class-rooms, state of the art laboratories with sophisticated equipments in all the specialized area of study, Drawing Halls, Seminar Halls, Gymnasium, Student’s common room, Ladies Room, Cafeteria, spacious play ground, well equipped library which is structured to provide academic support to the students as well as the faculties of the Institute. Availability of high speed broad band internet connectivity makes it possible to acquire basic engineering education and fulll research aspirations of the students.
At S. H. Jondhale Polytechnic emphasis is given on not only making you academically brilliant, but true leaders and team players, thus preparing you for the real life corporate world. For the convenience of the students, S.H. Jondhale Polytechnic institute is located opposite Dombivli (West) Railway station. There is a State Transport Bus stand situated at 5 minutes away from the campus. This makes reaching to institute extremely convenient and focus their energy more on learning. </Typography>
              
            </Box>
          </Grid>
     </Grid>
      </Box>
    </Box>
  );
};

export default About;
