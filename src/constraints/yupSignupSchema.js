import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required")
    .trim(),
  lname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name is required")
    .trim(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  pass: Yup.string().min(8).required("Password is required"),
});
export default SignupSchema;
