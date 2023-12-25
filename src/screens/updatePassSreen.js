import { View, Text, ActivityIndicator } from "react-native";
import UserInput from "../components/userInput";
import styles from "../constraints/styleSheet";
import yupUpdatePass from "../constraints/yupUpdatePass";
import { useState } from "react";
import { Formik } from "formik";
import ErrorText from "../components/errorText";
import AuthService from "../services/authService";
import SpinnerButton from "../components/spinner";

const UpdatePass = (props) => {
  const email = props.route.params.email;
  const [isLoading, setIsLoadinng] = useState(false);

  const changePass = async (values) => {
    setIsLoadinng(true);
    const user = {
      email: email,
      pass: values.pass,
    };
    const result = await AuthService.update(user);
    setIsLoadinng(false);
    if (result == "done") {
      props.navigation.navigate("Login");
    }
  };
  return (
    <Formik
      validationSchema={yupUpdatePass}
      initialValues={{ pass: "", confirmPass: "" }}
      onSubmit={changePass}
    >
      {({ handleChange, values, errors, handleSubmit }) => (
        <View style={styles.container}>
          <UserInput
            placeholder="Enter New Password"
            value={values.pass}
            onChangeText={handleChange("pass")}
          />
          {errors.pass && <ErrorText msg={errors.pass} />}
          <UserInput
            placeholder="Confirm Password"
            value={values.confirmPass}
            onChangeText={handleChange("confirmPass")}
          />
          {errors.confirmPass && <ErrorText msg={errors.confirmPass} />}
          <SpinnerButton
            isLoading={isLoading}
            title="submit"
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
};

export default UpdatePass;
