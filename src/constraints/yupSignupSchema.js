import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("first name is required")
    .trim("Spaces will not count"),
  lname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name is required")
    .trim("Spaces will not count"),
  email: Yup.string().email("Invalid email").required("email is required"),
  pass: Yup.string().min(8).required("password is required"),
});
export default SignupSchema;
