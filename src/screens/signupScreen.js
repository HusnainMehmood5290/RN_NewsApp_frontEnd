import React, { useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import Heading from "../components/heading";
import Button from "../components/button";
import UserInput from "../components/userInput";
import styles from "../constraints/styleSheet";
import yupSignupSchema from "../constraints/yupSignupSchema";
import { Formik } from "formik";
import axios from "axios";
import ErrorText from "../components/errorText";

export default SignupScreen = (props) => {
  const [isLoading, setIsLoadinng] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const SignUp = async (values) => {
    setIsLoadinng(true);
    const result = await axios.post("http://192.168.0.116:3000/signup", values);
    setIsLoadinng(false);
    if (result.data == "new") {
      props.navigation.navigate("Login");
    } else if (result.data == "exist") {
      setEmailError(true);
    }
    console.log(result.data);
  };

  return (
    <Formik
      validationSchema={yupSignupSchema}
      initialValues={{ fname: "", lname: "", email: "", pass: "" }}
      onSubmit={SignUp}
    >
      {({ handleSubmit, errors, values, handleChange }) => (
        <View style={styles.container}>
          <Heading value="Create an Account" />
          {emailError && (
            <Text style={{ color: "red" }}>
              Email is Already exist Try Another or Login
            </Text>
          )}
          <UserInput
            placeholder="Enter First name"
            value={values.fname}
            onChangeText={handleChange("fname")}
          />
          {errors.fname && <ErrorText msg={errors.fname} />}
          <UserInput
            placeholder="Enter Last name"
            value={values.lname}
            onChangeText={handleChange("lname")}
          />
          {errors.lname && <ErrorText msg={errors.lname} />}
          <UserInput
            placeholder="Enter Email"
            value={values.email}
            onChangeText={handleChange("email")}
          />
          {errors.email && <ErrorText msg={errors.email} />}
          <UserInput
            placeholder="Enter Password"
            value={values.pass}
            onChangeText={handleChange("pass")}
          />
          {errors.pass && <ErrorText msg={errors.pass} />}
          {isLoading ? (
            <ActivityIndicator size={"large"} />
          ) : (
            <Button title="Sign Up" onPress={handleSubmit} />
          )}
          <Text style={{ padding: 8 }}>Already Have an account?</Text>
          <Button
            title="Login"
            onPress={() => {
              props.navigation.navigate("Login");
            }}
            color="#28a745"
          />
        </View>
      )}
    </Formik>
  );
};
