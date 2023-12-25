import { View, ActivityIndicator, Text } from "react-native";
import UserInput from "../components/userInput";
import styles from "../constraints/styleSheet";
import { useState } from "react";
import AuthService from "../services/authService";
import SpinnerButton from "../components/spinner";

const ForgetPass = (props) => {
  const [isLoading, setIsLoadinng] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState();
  const checkEmail = async () => {
    setIsLoadinng(true);
    // console.log(email);
    const result = await AuthService.findMail(email);
    // console.log(result);
    // console.log(email);
    setIsLoadinng(false);
    if (result == "valid") {
      setEmailError(false);
      props.navigation.navigate("Update Password", { email: email });
    } else if (result == "inValid") {
      setEmailError(true);
    }
  };
  return (
    <View style={styles.container}>
      <UserInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Enter Your Email"
      />
      {emailError && (
        <Text style={{ color: "red", marginBottom: 5 }}>
          Email doesn't exist
        </Text>
      )}
      <SpinnerButton
        title="submit"
        onPress={checkEmail}
        isLoading={isLoading}
      />
    </View>
  );
};

export default ForgetPass;
