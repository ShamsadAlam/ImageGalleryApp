import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Navbar from "./Navbar";
import ImageList from "./ImageList";
import { getRecentImages } from "../services/FlickrApi";

const HomeScreen = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getRecentImages()
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Navbar title="Home" />
      <ScrollView>
        <ImageList images={images} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
