import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "../Button";
import { useFormik } from "formik";
import * as yup from "yup";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import styles from "./styles";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  fullName: yup.string().required("Name is required"),
  message: yup.string().min(20, "Too short!"),
});

const FormComponent = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      alert(`Email: ${values.email} from ${values.fullName}`);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={styles.input}>
        <TextField
          placeholder="Full name"
          id="fullName"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={
            formik.touched.fullName && formik.errors.fullName
              ? formik.touched.fullName && formik.errors.fullName
              : " "
          }
          InputProps={{ style: { fontSize: "16px" } }}
          sx={styles.textField}
        />
        <TextField
          placeholder="Email address"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.touched.email && formik.errors.email
              : " "
          }
          InputProps={{ style: { fontSize: "16px" } }}
          sx={styles.textField}
        />
      </Box>
      <TextareaAutosize
        minRows={6}
        id="message"
        name="message"
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
        placeholder="write message"
        style={styles.textareaAutosize}
      />
      <Button type="submit" autoFocus>
        send us message <ArrowForwardIosIcon />
      </Button>
    </form>
  );
};

export default FormComponent;
