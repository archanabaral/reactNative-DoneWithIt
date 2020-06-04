import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker"


const AppFormPicker = ({ items, name, placeholder , PickerItemComponent,numberOfColumns
 }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        numberOfColumns={numberOfColumns}
        items={items}
        placeholder={placeholder}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
      />

      {touched[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
