import React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

// import photo_banner from "../assets/img/photo_banner.jpeg";

import Fade from 'react-reveal/Fade';

import styles from "./Servicesstyles";


const services = () => {
  return (
    <Box sx={styles.hero}>
      <Box sx={styles.wrapper}>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h2"> <Fade left>Features</Fade></Typography>
          <Typography variant="body1" sx={styles.text}>
          

 - Lecture halls with ergonomically designed furniture & equip with modern teaching aids.<br /> 

- Job Placement activities. <br />

-	Unlimited access to Internet facility. <br />

-	Regular correspondence with parents. <br />

-	Blood donation camp.<br /> 

-	Tree plantation activity. <br />

-	Paper presentation competition. <br />

-	Regular Sports Events on Playgrounds in campus.<br /> 

-	Consultancy services.<br /> 

-	Teacher parent guardian scheme <br />

-	Personal attention with special coaching <br />

-	Arrangement of seminars from technical experts & multifaceted personalities. <br />

-	Industrial visits.<br /> 

-	Facilities for physically Handicapped Students.<br /> 

-	Required and necessary arrangements are made as per ve ghting Act.<br /> 

-	Counseling programs are conducted to keep students away from Cigarette/Tobacco & other drugs.<br /> 
  </Typography>


  <Typography variant="h2"> <Fade left>Students Co-operative stores</Fade></Typography>
  <Typography variant="body1" sx={styles.text}>
  The Institute has started Student’s Co-operative Stores since last 11 years to cater the needs of student’s i.e. books, stationary, drawing materials and laboratory journals etc.
  </Typography>

  <Typography variant="h2"> <Fade left>Railway Concession Terms / Semesters</Fade></Typography>
  <Typography variant="body1" sx={styles.text}>
  Bonafide students of the Polytechnic are eligible for Railway and Bus Concession. The details in this concession will be available in the polytechnic ofce after they have enrolled their names by payments of fees.
  </Typography>

  <Typography variant="h2"> <Fade left>Identity Card</Fade></Typography>
  <Typography variant="body1" sx={styles.text}>
  Each student is required to possess an identity card fully filled in by the Librarian, signed by the Principal and he should produce the same when demanded. He must submit two copies of his latest passport size photograph to the librarian, when called to do so by the office.
  </Typography>

  
  <Typography variant="h2"> <Fade left>Terms/semesters</Fade></Typography>
  <Typography variant="body1" sx={styles.text}>
  The rst semester of Polytechnic starts normally in the Second / Third week of July. The courses are of three years duration, run on semester pattern. Under this pattern, the examinations are conducted by Maharashtra State Board of Technical Education, Mumbai at the mid and end of each academic year.
  </Typography>

  <Typography variant="h2"> <Fade left>Examination & Affiliation</Fade></Typography>
  <Typography variant="body1" sx={styles.text}>
  The institution is affiliated to the Maharashtra State Board of Technical Education, Mumbai for the purposes of syllabus, examination and award of diploma after completion of courses successfully.
  </Typography>

  <Typography variant="h2"> <Fade left>Tuition fees & Other Fees</Fade></Typography>
  <Typography variant="body1" sx={styles.text}>
  The candidate has to pay provisional fee as per the directives of Shikshan Shulka Samiti for the academic year 2014-2015 while taking admission.


Candidate admitted under backward class category Reserved and TFWS will have to pay the fees as per the directives of Directorate of Technical Education,

M. S. and should apply for Scholarships/Free ship whichever applicable for fee reimbursement. Failing to do so, the candidate will have to pay full fees as decided by shikshan shulka samiti, Government of Maharashtra

Note: Changes if any, in the fees as per the decision of Shikshan Shulka Samiti /Competent authority for the academic year 2022-2023 will be notied later and will be binding on the candidate to pay the revised fees, if any
<br />
Examination Fees
<br />
Students shall pay the examination fee, enrollment fee, CIA Package Licenses, charges for the manuals/journals through the institution to the Maharashtra State Board of Technical Education, Mumbai. The fee will be as per the notications prescribed by MSBTE from time to time

  </Typography>

  <Typography variant="h2"> <Fade left>Refund of Library, Laboratory Deposits & Caution money:</Fade></Typography>
  <Typography variant="body1" sx={styles.text}>
  The above Deposits will be refunded immediately on production of original fee receipts after deducting outstanding dues, if any. The application for refund of deposit should be submitted to the Principal, if it is not claimed in writing within three complete account years after the student actually leave the institutions or within three complete account years after the date of successfully completion of course, whichever is earlier, failing which the deposits shall be forfeited.
  </Typography>

        </Box>
      </Box>
    </Box>
  );
};




export default services;
