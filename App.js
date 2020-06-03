import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import ListEditScreen from "./app/screens/ListEditScreen";



export default function App() {
  
  return (
    <Screen>
     <ListEditScreen />
    </Screen>
  );
}
