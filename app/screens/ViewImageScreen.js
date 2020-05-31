import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ViewImageScreen = () => {
  return (
    <View style={styles.container}>

      <MaterialCommunityIcons name="delete" size={40} color="gray" />
      <View style={styles.closeIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 40,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 20,
    right: 30,
    borderRadius: 10,
  },
  // deleteIcon: {
  //   width: 50,
  //   height: 40,
  //   backgroundColor: colors.secondary,
  //   position: "absolute",
  //   top: 20,
  //   right: 30,
  //   borderRadius: 10,
  // },
});
