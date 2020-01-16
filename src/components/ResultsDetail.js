import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.continerStyle}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  continerStyle: {
    marginLeft: 15
  },
  imageStyle: {
    height: 125,
    width: 250,
    marginBottom: 5,
    borderRadius: 5
  },
  nameStyle: {
    fontWeight: "bold"
  }
});

export default ResultsDetail;
