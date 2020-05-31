import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import Apptext from "../components/AppText";

const Card = ({ title, subTitle, image }) => {
  return (
    <View>
     <Image style={styles.image} source={image} /> 
      <View style={styles.detailContainer}>
        <Apptext>{title}</Apptext>
        <Text style={styles.price}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  detailContainer: {
    padding: 20,
  },
});
