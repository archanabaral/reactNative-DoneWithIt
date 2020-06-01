import React from "react";
import { Text } from "react-native";
import defaultStyle from "../config/styles";

function AppText({ children, style }) {
  return <Text style={[defaultStyle.text, style]}>{children}</Text>;
}

export default AppText;

// const styles = StyleSheet.create({
//     // text: {
//     //     fontSize: 24,
//     //     fontFamily: Platform.OS === "android" ?  "Roboto" : "Avenir"
//     // }
// })
