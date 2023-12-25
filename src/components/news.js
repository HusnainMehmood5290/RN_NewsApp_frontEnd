import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import axios from "axios";
import CardView from "./newsCardView";

const NewsFeed = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=00dd38a68e87496f97b14b22ccde5def`
      )
      .then((response) => {
        setNewsData(response.data.articles);
        // console.log(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <FlatList
      data={newsData}
      keyExtractor={(item, index) => item.url + index} // Use URL + index as the unique key
      renderItem={({ item }) => (
        <CardView
          title={item.title}
          imageUrl={item.urlToImage}
          description={item.description}
          onPressReadMore={item.url}
        />
      )}
    />
  );
};

export default NewsFeed;
