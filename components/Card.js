import React from "react";
import { Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { colors } from "../constant/colors";

const widthContaner = Dimensions.get("screen").width / 2 - 40;

const MovieCard = ({
  title,
  releaseYear,
  imageSource,
  description,
  handleClick,
}) => {
  return (
    <Card containerStyle={styles.containerStyle}>
      <TouchableOpacity onPress={handleClick}>
        <Card.Image source={{ uri: imageSource }} style={styles.image} />
        <Card.Title style={{ color: colors.white }}>{title}</Card.Title>
        <Text style={styles.date}>Year: {releaseYear}</Text>
        <Text style={styles.description}>{description}</Text>
      </TouchableOpacity>
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
    height: 100,
    width: 200,
    borderRadius: 5,
  },
  date: {
    fontStyle: "italic",
    color: "white",
  },
  description: {
    fontStyle: "italic",
    color: "white",
    fontSize: 10,
  },
});

export default MovieCard;
