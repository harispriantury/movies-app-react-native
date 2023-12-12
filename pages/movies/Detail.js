import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-elements";
import { colors } from "../../constant/colors";

const path = "http://image.tmdb.org/t/p/w500";
const reviewPath =
  "https://api.themoviedb.org/3/movie/uniqMovieID/reviews?api_key=faea0ae4c04809b0346ec5f61c8ec1ef";

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

    //  "overview": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
    // "popularity": 2277.914,
    // "poster_path": "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
    // "release_date": "2023-10-18",
    // "title": "Killers of the Flower Moon",
    // "video": false,
    // "vote_average": 7.7,
    // "vote_count": 1296
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
