import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Heading from "../components/heading";
import UserInput from "../components/userInput";
import SpinnerButton from "../components/spinner";
import ErrorText from "../components/errorText";
import styles from "../constraints/styleSheet";
import yupLoginSchema from "../constraints/yupLoginSchema";
import AuthService from "../services/authService";
import { Formik } from "formik";
export default LoginScreen = (props) => {
  const [isLoading, setIsLoadinng] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const Login = async (values) => {
    setIsLoadinng(true);
    const result = await AuthService.loginHandler(values);
    // console.log(result);
    setIsLoadinng(false);
    if (result == false) {
      setEmailError(true);
    } else {
      setEmailError(false);
      props.navigation.navigate("Dashboard", { data: result.result });
    }
  };
  return (
    <Formik
      initialValues={{ email: "", pass: "" }}
      validationSchema={yupLoginSchema}
      onSubmit={Login}
    >
      {({ handleChange, handleSubmit, errors, values }) => (
        <View style={styles.container}>
          <Heading value="Login" />

          <UserInput
            placeholder="Enter Email"
            onChangeText={handleChange("email")}
            value={values.email}
          />

          {errors.email && <ErrorText msg={errors.email} />}
          <UserInput
            placeholder="Enter Password"
            onChangeText={handleChange("pass")}
            value={values.pass}
          />
          {errors.pass && <ErrorText msg={errors.pass} />}
          {emailError && (
            <ErrorText msg="Email or Password is incorrect try again or signup" />
          )}
          <SpinnerButton
            title="Login"
            onPress={handleSubmit}
            isLoading={isLoading}
          />
          <TouchableOpacity
            style={{ width: "100%", alignItems: "flex-end", marginTop: 7 }}
            onPress={() => {
              props.navigation.navigate("Forget Password");
            }}
          >
            <Text
              style={{
                textDecorationLine: "underline",
                color: "blue",
                paddingBottom: 8,
              }}
            >
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
