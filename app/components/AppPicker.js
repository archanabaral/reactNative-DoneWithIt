import React, { Fragment, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "../components/PickerItem"

const AppPicker = ({ icon, placeholder, items }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      {
        <Modal visible={modalVisible} animationType="slide">
          <Button title="Close" onPress={() => setModalVisible(false)}></Button>
          <FlatList data={items} keyExtractor={ (item) => item.value.toString()} renderItem={({item}) => <PickerItem  label={item.label} onPress={() =>console.log(item)}/> }></FlatList>
        </Modal>
      }
    </Fragment>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
