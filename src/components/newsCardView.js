import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";

const CardView = ({ title, description, imageUrl, onPressReadMore }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title} </Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity
          style={styles.readMoreButton}
          onPress={() => Linking.openURL(onPressReadMore)}
        >
          <Text style={styles.readMoreText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
  readMoreButton: {
    backgroundColor: "#3498db",
    borderRadius: 5,
    padding: 8,
    marginTop: 10,
  },
  readMoreText: {
    color: "white",
    textAlign: "center",
  },
});

export default CardView;
