import {
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SearchBar } from "react-native-elements";
import MiniButton from "../../components/MiniButton";
import Card from "../../components/Card";
import CardComponent from "../../components/Card";
import MovieCard from "../../components/Card";
import { Dimensions } from "react-native";

const images = {
  uri: "https://images.unsplash.com/photo-1581250505440-d813cad691a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const Movies = () => {
  const [param, setParam] = useState("");

  return (
    <ImageBackground style={styles.background} source={images}>
      <View style={{ width: "100%" }}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={(e) => setParam(e)}
          showLoading
          value={param}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return <MiniButton key={index} text={"hello"} />;
          })}
        </View>
      </ScrollView>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        numColumns={2}
        style={{
          padding: 0,
        }}
        columnWrapperStyle={{ marginTop: 5 }}
        keyExtractor={(item, index) => index}
        renderItem={(item) => <MovieCard />}
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
