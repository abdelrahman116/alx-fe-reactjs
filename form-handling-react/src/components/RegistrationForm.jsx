// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import React from "react";

// const validationSchema = Yup.object({
//   name: Yup.string().required("Name is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
// });

// const RegistrationForm = () => (
//   <Formik
//     initialValues={{ name: "", email: "" }}
//     validationSchema={validationSchema}
//     onSubmit={(values) => {
//       console.log(values);
//     }}
//   >
//     {() => (
//       <Form>
//         <Field type="text" name="name" />
//         <ErrorMessage name="name" component="div" />
//         <Field type="email" name="email" />
//         <ErrorMessage name="email" component="div" />
//         <button type="submit">Submit</button>
//       </Form>
//     )}
//   </Formik>
// );

// export default RegistrationForm;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const RegistrationForm = () => (
  <Formik
    initialValues={{ name: "", email: "", password: "" }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {() => (
      <Form>
        <div>
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

export default RegistrationForm;
