import React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

// import photo_banner from "../assets/img/photo_banner.jpeg";

import Fade from "react-reveal/Fade";

import styles from "./Servicesstyles";

const admission = () => {
  return (
    <Box sx={styles.hero}>
      <Box sx={styles.wrapper}>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h2">
            {" "}
            Rules For Admission To Diploma Courses In Polytechnics In
            Maharashtra State.
          </Typography>
          <br />
          <Typography variant="h2" style={{textDecoration:'underline'}}>
            {" "}
            <Fade left>General</Fade>
          </Typography>
          <Typography variant="body1" sx={styles.text}>
            1. These rules shall apply for admission to Diploma Courses as shown
            in Annexure "A" in the state of Government and Non- Government
            Polytechnic (aided. Unaided) and autonomous institutions.<br />
            2.Denitions: "Competent Authority" means the Director of Technical
            Education, Maharashtra State, Mumbai. "Polytechnic" means
            institution imparting technical education in Engineering and allied
            technical subjects leading to Diploma in Engineering /Technology.
            "Sanctioned Intake" means; the number of sears course wise
            sanctioned by the government.<br /> 
            3. The candidate seeking admission tothe Diploma Comes mentioned in Annexure "A" and eligible to applyshall submit his/her application lled up in an respect, in the prescribed printed form together with necessary documents to the Authority.<br /> 
            4. Such applications must be in lled up by Candidate in
            his/her own handwriting duty signed by the candidate
            himself/herself: with declaration signed by Father/Guardian.<br /> 
            5. Applications of the candidates shall be processed strictly on merit marks and admission will be offered to them as per the choice
            indicated at the time of interview subject to the availability of
            seats and various reservations.
          </Typography>

          <Typography variant="h2"style={{textDecoration:'underline'}}>
            {" "}
            <Fade left>For Maharashtra state Board Candidates</Fade>
          </Typography>
          <Typography variant="body1" sx={styles.text}>
          a.	The candidates who have passed SSC Examination prior to March 2009, the aggregate marks shall be grand total of marks obtained by the candidate in any 5 Subjects, where he/she has scored maximum marks. 

b.	The candidates, who have passed SSC Examination after March 2009, the aggregate marks shall be total marks of 5 Subjects into consideration and mentioned in the marksheet. 

c.	Candidates, who have passed Mathematics and Science and Technology  are eligible for admission. 

          </Typography>

          <Typography variant="h2"style={{textDecoration:'underline'}}>
            {" "}
            <Fade left> For ICSE Candidates </Fade>
          </Typography>
          <Typography variant="body1" sx={styles.text}>
          a.	Students seeking admission on the basis of Group1 & Group2 Subjects only, the aggregate marks in any of the 5 Subjects from Group1 & Group2 where he/she has scored maximum marks. 

b.	Students seeking admission on the basis of Group1 & Group2 & Group3, aggregate marks shall be the grand total of all subjects from all groups. 


          </Typography>

          <Typography variant="h2"style={{textDecoration:'underline'}}>
            {" "}
            <Fade left> For CBSE Candidates</Fade>
          </Typography>
          <Typography variant="body1" sx={styles.text}>
          a.	The aggregate marks means the grand total of marks obtained by the candidate, including all subjects as declared on mark sheet. In case the result of the candidate is given in terms of grades such candidates are required to submit the graded result into the equivalent marks authorized from the concerned institute Board. 
          </Typography>

          <Typography variant="h2"style={{textDecoration:'underline'}}>
            {" "}
            <Fade left>Domicile</Fade>
          </Typography>
          <Typography variant="body1" sx={styles.text}>
          Unless provided in these rules, the admissions to diploma courses are open to the candidates of the state of Maharashtra. Who have learnt in any recognized institution in Maharashtra, for at least two preceding academic years of the qualifying examinations? This much nay be a sufcient proof of domicile in Maharashtra for the purpose of admission unless the situation so warrants. Sons/ daughters of the employees of a- Govt. of India or b- Undertakings of Govt. of India shall be eligible for admissions provided that the guardian of such candidate shall be domiciled in any other state or Union Territory but he/she must have been transferred to Maharashtra *within two preceding academic years, Late joined the posts and have not been transferred out of Maharashtra. The duration of two years shall be counted prior to the last date receipt of application.
          </Typography>

          <Typography variant="h2"style={{textDecoration:'underline'}}>
            {" "}
            <Fade left>Nationality</Fade>
          </Typography>
          <Typography variant="body1" sx={styles.text}>
          Unless provided in these rules, the candidate must be an Indian National.
          </Typography>

          <Typography variant="h2"style={{textDecoration:'underline'}}>
            {" "}
            <Fade left>Reservation	</Fade>
          </Typography>
          <Typography variant="body1" sx={styles.text}>
          Institute  level  reservations  as  directed  by  Directorate  of  Technical  Education Maharashtra.	

          </Typography>

          <Typography variant="h2"style={{textDecoration:'underline'}}>
            {" "}
            <Fade left>
            Backward Classes
            </Fade>
          </Typography>
          <Typography variant="body1" sx={styles.text}>
          Reserved Seats for backward class category candidates, remaining vacant after
admission of the candidates from backward class shall be offered to the SBC
category candidate. However care shall be taken that reservation quota for S.B.C
category shall not exceed 2% of the available under General admission process and

total reservation does not exceed 50%.
Candidate claiming to belong to categories c to g above will have to furnish
certicates from appropriate authority that the candidate's parent does not belong to
creamy layer as per the relevant orders of the Government.
These reservations shall be course-wise in an institution.


These reservations are admissible only for the candidate domiciled in the State of

Maharashtra.

If  a  candidate  belongs  to  more  than  one  category  of  reservations,  his/her
candidature shall be considered in the same sequence of r reservations as
occurring in these Rules. It shall be treated that the candidate has availed the

reservations under which he/she is admitted.
If any, of the seats reserved under these Rules for any of the categories cannot be
lled in for any reason, the sane shall be treated as unreserved and these seats shall

be offered to the candidates Iron General Merit List, subject the compliance or rule.

Unless otherwise restricted, the seam reserved under these Rules are minimum


seats assured for the respective categories of the candidates; by standing general
merit they may secure any number of seats.
One sear per course in an Government aided and unaided Institution in the State is

reserved for the children of citizen displaced due to terrorist activities from Jammu &

Kashmir and also children of ofces belonging to I.A.S... I.P.S., U.S. and other similar
cadres and staff belonging to Military and Para Military forces transferred to Jammu

Kashmir to deal with terrorist activities. In order to be eligible for admission the

students ought to fulll the prescribed minimum educational qualication as per
rule.

          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default admission;
