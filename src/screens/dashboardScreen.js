import { Button, Text, View } from "react-native";
import styles from "../constraints/styleSheet";
import Heading from "../components/heading";

const Dashboard = (props) => {
  const { firstName, lastName, email } = props.route.params.data;
  return (
    <View style={styles.container}>
      <Heading value="Welcome To Dashboard" />
      <Text>{`Welcome ${firstName} ${lastName}`}</Text>
      <Text>{`Here is your email: ${email}`}</Text>
      <Button
        title="News"
        onPress={() => props.navigation.navigate("News Screen")}
      />
    </View>
  );
};
export default Dashboard;
