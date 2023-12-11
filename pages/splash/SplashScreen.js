import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { colors } from "../../constant/colors";
import CustomButton from "../../components/CustomerButton";

const image = {
  uri: "https://images.unsplash.com/photo-1608737739007-f0019bc67f59?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Master Movies</Text>
          <Text style={styles.subtitle}>
            Join With Us and {"\n"} Watch The Latest Movies Now {"\n"} In Master
            Movies
          </Text>
        </View>
        <CustomButton
          text={"Search"}
          handleClick={() => navigation.navigate("Movies")}
        />
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 50,
    justifyContent: "space-between",
  },
  titleContainer: {
    marginTop: 50,
    marginRight: 30,
    backgroundColor: "rgba(0,0,0, 0.25)",
    padding: 25,
    borderRadius: 25,
    shadowColor: colors.white,
    shadowOffset: { width: -4, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
