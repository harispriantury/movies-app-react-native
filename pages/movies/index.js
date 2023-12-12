import axios from "axios";

import { headerGenre } from "../../config/genre";
import { movieConfig } from "../../config/movie";
import { imageConfig } from "../../config/image";

import {
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SearchBar } from "react-native-elements";
import MiniButton from "../../components/MiniButton";
import Card from "../../components/Card";
import CardComponent from "../../components/Card";
import MovieCard from "../../components/Card";
import { Dimensions } from "react-native";

const images = {
  uri: "https://images.unsplash.com/photo-1581250505440-d813cad691a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const pathMovie =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=1&with_genres=";

const Movies = () => {
  const [param, setParam] = useState("");
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(28);
  const [loading, setLoading] = useState(false);

  const fetchGenre = () => {
    axios
      .request(headerGenre)
      .then(function (response) {
        const data = response.data.genres;
        setGenres(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const fetchMovies = async (id) => {
    setLoading(true);
    movieConfig.url = pathMovie + id;
    const {
      data: { results },
    } = await axios.request(movieConfig);
    if (Array.isArray(results)) {
      setMovies(results);
    }
    setLoading(false);
  };

  const handleClickGenre = (item) => {
    setSelectedGenre(item.id);
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  useEffect(() => {
    fetchMovies(selectedGenre);
  }, [selectedGenre]);

  return (
    <ImageBackground style={styles.background} source={images}>
      <View style={{ width: "100%" }}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={(e) => setParam(e)}
          showLoading={loading}
          value={param}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryContainer}>
          {genres &&
            genres.map((item, index) => {
              return (
                <MiniButton
                  key={index}
                  text={item.name}
                  handleClick={() => handleClickGenre(item)}
                />
              );
            })}
        </View>
      </ScrollView>

      <FlatList
        data={movies}
        numColumns={2}
        style={{
          padding: 0,
        }}
        columnWrapperStyle={{ marginTop: 5 }}
        keyExtractor={(item, index) => index}
        onEndReached={() => console.log("hello word")}
        renderItem={({ item }) => {
          return (
            <MovieCard
              imageSource={"http://image.tmdb.org/t/p/w500" + item.poster_path}
              title={item.original_title}
              releaseYear={item.release_date}
              description={item.overview}
            />
          );
        }}
      />
      {/* <ScrollView>
        <View style={styles.cardContainer}>
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <View>
                <MovieCard />
              </View>
            );
          })}
        </View>
      </ScrollView> */}
    </ImageBackground>
  );
};

export default Movies;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 25,
    alignItems: "center",
  },
  categoryContainer: {
    height: 53,
    gap: 12,
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  cardContainer: {
    flex: 3,
    flexWrap: "wrap",
  },
});
