import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

const SpinnerButton = (props) => {
  return (
    <TouchableOpacity
      style={[
        buttonColor(props.color).button,
        props.isLoading && style.buttonDisabled,
      ]}
      onPress={props.isLoading ? null : props.onPress}
      disabled={props.isLoading}
    >
      {props.isLoading ? (
        <>
          <Text style={buttonColor().buttonText}>{props.title}</Text>
          <ActivityIndicator color="#ffffff" style={buttonColor.spinner} />
        </>
      ) : (
        <Text style={buttonColor().buttonText}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};
const buttonColor = (color) => {
  return (style = StyleSheet.create({
    button: {
      backgroundColor: color || "#007BFF",
      width: "100%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
    buttonDisabled: {
      backgroundColor: "#bdc3c7",
    },
    buttonText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
    },
    spinner: {
      marginLeft: 10,
    },
  }));
};
export default SpinnerButton;
