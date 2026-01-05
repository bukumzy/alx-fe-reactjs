import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Password required")
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Formik Submitted:", values);
      }}
    >
      <Form>
        <h2>Formik Registration Form</h2>

        <Field name="username" placeholder="Username" />
        <ErrorMessage name="username" component="p" />

        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" component="p" />

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="p" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
