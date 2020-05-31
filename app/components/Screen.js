import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import Constants from "expo-constants";
const Screen = ({children , style}) => {
return <SafeAreaView style={[styles.screen , style]}>{children}</SafeAreaView>
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, instead we can use below code
        paddingTop: Constants.statusBarHeight,
        flex:1
      },
})
