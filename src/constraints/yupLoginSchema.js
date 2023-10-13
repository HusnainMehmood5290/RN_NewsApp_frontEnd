import * as Yup from "yup";
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("email is required"),
  pass: Yup.string().min(8).required("Password is required"),
});
export default LoginSchema;
