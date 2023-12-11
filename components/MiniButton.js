import { StyleSheet, Text, Touchable, View } from "react-native";
import { Button } from "react-native-elements";
import React from "react";
import { colors } from "../constant/colors";
import { TouchableOpacity } from "react-native";

const MiniButton = ({ text, handleClick, bgColor }) => {
  const styles = StyleSheet.create({
    container: {
      alignContent: "center",
      paddingVertical: 5,
      paddingHorizontal: 15,
      backgroundColor: bgColor || "#F36C21",
      borderRadius: 20,
    },
    text: {
      color: bgColor || "white",
      textAlign: "center",
      fontSize: 12,
      fontWeight: "700",
    },
  });
  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MiniButton;
