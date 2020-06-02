import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const ValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppForm
        initialValues={{ email: " ", password: " " }}
        onSubmit={(values) => console.log(values)}
        validationSchema={ValidationSchema}
      >
        <AppFormField
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          keyboardType="email-address"
        />

        <AppFormField
          placeholder="Password"
          icon="lock"
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <SubmitButton title={"Login"}></SubmitButton>
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
