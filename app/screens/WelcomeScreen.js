import React from "react";
import { StyleSheet, ImageBackground, Text, View, Image } from "react-native";
import colors from "../config/colors"
const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />

        <Text>Enjoy Stories with the sip of Coffee</Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 40,
    backgroundColor: colors.primary,
  },

  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 50,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 40,
    backgroundColor: colors.secondary,
  },
});
