import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Card } from "react-native-elements";
import { colors } from "../constant/colors";

const imageSource =
  "https://images.unsplash.com/photo-1613331455414-1e9258b4b422?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const widthContaner = Dimensions.get("screen").width / 2 - 40;

const MovieCard = ({ title, releaseYear, description }) => {
  return (
    <Card containerStyle={styles.containerStyle}>
      <Card.Image source={{ uri: imageSource }} style={styles.image} />
      <Card.Title>{title}</Card.Title>
      <Text style={styles.year}>{`Release Year: ${releaseYear}`}</Text>
      <Text>{description}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 8,
    backgroundColor: colors.BLACK_OPACITY,
    width: widthContaner,
    margin: 5,
    padding: 5,
  },
  image: {
    height: 200, // Sesuaikan dengan kebutuhan desain Anda
  },
  year: {
    fontStyle: "italic",
    color: "gray",
  },
});

export default MovieCard;
