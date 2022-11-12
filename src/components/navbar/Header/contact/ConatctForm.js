import React from "react";
import ReactDOM from "react-dom";
import { Formik,  useField } from "formik";
import * as Yup from "yup";
import { Form, InputGroup } from "react-bootstrap";
/* 
const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return(
        <>

       <label htmlFor={props.id || props.name}>{label}</label>

       <input className="text-input" {...field} {...props} />

       {meta.touched && meta.error ? (

         <div className="error">{meta.error}</div>

       ) : null}

     </>
    );
} */
const ConatctForm = () => {
    <Formik
      initialValues={{
        firstName: "",

        lastName: "",

        subject: "",
        
        message: "",

      }}
      onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}

      validationSchema={Yup.object({
        firstName: Yup.string()

          .max(15, "Must be 15 characters or less")

          .required("Required"),

        lastName: Yup.string()

          .max(20, "Must be 20 characters or less")

          .required("Required"),

          subject: Yup.string()

          .max(20, "Must be 20 characters or less")

          .required("Required"),

          message: Yup.string()

          .max(20, "Must be 20 characters or less")

          .required("Required"),

        
      })}     
      >
      </Formik>

        {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
    
  return (
    < >
        <Form onSubmit={handleSubmit}>
        <Form.Label><b> First Name</b></Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            placeholder="Enter Your First Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
            border={touched.firstName && errors.firstName && "1px solid red"}
          />
            {touched.email && errors.email && (
                <p style={{ color: "red" }}>{errors.email}</p>
              )}
            <Form.Label><b> Last Name</b></Form.Label>
            <Form.Control
            name="lastName"
            type="text"
            placeholder="Enter Your Last Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            border={touched.lastName && errors.lastName && "1px solid red"}
          />
            {touched.lastName && errors.lastName && (
                <p style={{ color: "red" }}>{errors.lastName}</p>
              )}

            <Form.Label><b>Subject</b></Form.Label>

            <Form.Control
            label="Subject"
            name="subject"
            type="text"
            placeholder="Subject is Here"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.subject}
            border={touched.subject && errors.subject && "1px solid red"}
          />
            {touched.subject && errors.subject && (
                <p style={{ color: "red" }}>{errors.subject}</p>
              )}

        <Form.Label><b>Message</b></Form.Label>
           <Form.Control
            name="message"
            type="text"
            placeholder="Jane"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            border={touched.message && errors.message && "1px solid red"}
            />
            {touched.message && errors.message && (
                <p style={{ color: "red" }}>{errors.message}</p>
              )}

          <button type="submit">Submit</button>
        </Form>
    
   
    </>
  );
}
}}
export default ConatctForm
