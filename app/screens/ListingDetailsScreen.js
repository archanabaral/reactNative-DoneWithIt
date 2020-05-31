import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Apptext from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailContainer}>
        <Apptext>Red jacket for sale</Apptext>
        <Text style={styles.price}>$100</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/photo.jpg")}
            title="Kiran Winget"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
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
  userContainer: {
    marginVertical:40
  }
});
