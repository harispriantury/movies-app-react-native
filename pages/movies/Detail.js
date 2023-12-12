import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { colors } from "../../constant/colors";
import { API_KEY } from "@env";

const path = "http://image.tmdb.org/t/p/w500";
const reviewPath =
  "https://api.themoviedb.org/3/movie/uniqMovieID/reviews?api_key=" + API_KEY;

const Detail = ({ route }) => {
  const [reviews, setReviews] = useState([]);
  const params = route.params;

  const getReviews = async () => {
    const url = reviewPath.replace("uniqMovieID", params.id);
    const data = await axios.get(url);
    if (data.data.results.length > 0) {
      setReviews(data.data.results);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);
  return (
    <ImageBackground
      style={styles.background}
      source={{ uri: path + params.poster_path }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{params.title}</Text>
        <Text style={[styles.subtitle, styles.bold]}>
          Popularity : {params.popularity}
        </Text>
        <Text style={styles.subtitle}>Overview : {params.overview}</Text>
        <ScrollView>
          <View style={styles.reviewContainer}>
            <Text style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>
              Review
            </Text>
            {reviews.map((item, index) => {
              return (
                <View key={index}>
                  <Text style={styles.text}>{item.content}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Detail;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 25,
  },
  container: {
    backgroundColor: colors.BLACK_OPACITY2,
    flex: 1,
    borderRadius: 20,
    padding: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.white,
  },
  reviewContainer: {
    padding: 10,
  },
  text: {
    fontSize: 12,
    color: colors.white,
  },
  bold: {
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: colors.white,
  },
});
