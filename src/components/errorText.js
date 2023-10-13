import { Text, View } from "react-native";

const ErrorText = (props) => {
  return (
    <View style={{ width: "100%", marginLeft: 7 }}>
      <Text style={{ color: "red", alignItems: "flex-start" }}>
        {props.msg}
      </Text>
    </View>
  );
};
export default ErrorText;
