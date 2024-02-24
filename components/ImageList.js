import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ImageList = ({ images }) => {
  return (
    <View style={styles.imageContainer}>
      {images.map((image) => (
        <Image
          key={image.id}
          source={{ uri: image.url }}
          style={styles.image}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
  },
});

export default ImageList;
