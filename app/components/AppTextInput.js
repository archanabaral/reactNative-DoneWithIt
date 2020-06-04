import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles"

const AppTextInput = ({ icon , ...otherProps}) => {
  return (
    <View style={styles.container}>
      {icon &&( <MaterialCommunityIcons name={icon} size={25} color={colors.medium} style={styles.icon} />)}
      <TextInput placeholderTextColor={colors.medium} style={defaultStyles.text} {...otherProps} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  
  icon:{
      marginRight:10
  }
});
