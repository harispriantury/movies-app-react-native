import axios from "axios";

import { headerGenre } from "../../config/genre";
import { movieConfig } from "../../config/movie";

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SearchBar } from "react-native-elements";
import MiniButton from "../../components/MiniButton";
import MovieCard from "../../components/Card";
import { BEARER_TOKEN } from "@env";

const images = {
  uri: "https://images.unsplash.com/photo-1581250505440-d813cad691a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const Movies = ({ navigation }) => {
  const [param, setParam] = useState("");
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(28);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

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
    const params = {
      with_genres: id,
    };
    movieConfig.params = params;
    const {
      data: { results },
    } = await axios.request(movieConfig);
    if (Array.isArray(results)) {
      setMovies(results);
    }
    setLoading(false);
    setPage(1);
  };

  const infiniteFetch = async (id) => {
    setLoading(true);
    const params = {
      with_genres: id,
      page: page,
    };
    movieConfig.params = params;
    const {
      data: { results },
    } = await axios.request(movieConfig);
    if (Array.isArray(results)) {
      setMovies((prevState) => [...prevState, ...results]);
    }
    setLoading(false);
    setPage(1);
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

  useEffect(() => {
    if (page > 1) {
      infiniteFetch(selectedGenre);
    }
  }, [page]);

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
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => {
          return (
            <MovieCard
              handleClick={() => navigation.navigate("Detail", item)}
              imageSource={"http://image.tmdb.org/t/p/w500" + item.poster_path}
              title={item.original_title}
              releaseYear={item.release_date}
              description={item.overview}
            />
          );
        }}
      />
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
