import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import SignupScreen from "../screens/signupScreen";
import LoginScreen from "../screens/loginScreen";
import Dashboard from "../screens/dashboardScreen";
import ForgetPass from "../screens/forgetPassScreen";
import UpdatePass from "../screens/updatePassSreen";
import newsScreen from "../screens/newsScreen";
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Forget Password" component={ForgetPass} />
      <Stack.Screen name="Update Password" component={UpdatePass} />
      <Stack.Screen name="News Screen" component={newsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
