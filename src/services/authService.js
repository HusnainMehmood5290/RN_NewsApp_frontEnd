import axios from "axios";
import { REACT_APP_API_URL } from "@env";
const AuthService = {
  signUpHandler: async (values) => {
    try {
      // console.log(signupUrl);
      const result = await axios.post(`${REACT_APP_API_URL}signup`, values);
      return result.data;
    } catch (error) {
      throw error.message;
    }
  },
  loginHandler: async (values) => {
    try {
      // console.log(loginUrl);
      console.log(REACT_APP_API_URL);
      // console.log(values);
      const result = await axios.post(`${REACT_APP_API_URL}login`, values);
      // console.log(result);
      return result.data;
    } catch (error) {
      // console.log(error.message);
      throw error.message;
    }
  },
  findMail: async (email) => {
    try {
      const result = await axios.post(`${REACT_APP_API_URL}findEmail`, {
        email: email,
      });
      return result.data;
    } catch (error) {
      throw error.message;
    }
  },
  update: async (user) => {
    try {
      const result = await axios.post(`${REACT_APP_API_URL}update`, user);
      return result.data;
    } catch (error) {
      throw error.message;
    }
  },
};

export default AuthService;
