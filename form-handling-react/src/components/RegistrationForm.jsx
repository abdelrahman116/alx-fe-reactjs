import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // ✅ Required by test
    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    console.log("Form submitted:", { username, email, password });
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form onSubmit={handleSubmit}>
          <div>
            <input
              value={username}
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
            />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <input
              value={email}
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <input
              value={password}
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
