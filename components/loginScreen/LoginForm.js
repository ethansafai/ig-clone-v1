import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import firebase from "../../firebase";

const LoginForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(8, "Your password must contain at least 8 characters"),
  });

  const onLogin = async(email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log(`Firebase login successful, ${email} ${password}`);
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number, username, or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 8
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                keyboardType="default"
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <TouchableOpacity
              style={{ alignItems: "flex-end", marginBottom: 20 }}
            >
              <Text style={{ color: "#6BB0F5" }}>Forgot password?</Text>
            </TouchableOpacity>
            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity>
                <Text
                  style={{ color: "#6BB0F5" }}
                  onPress={() => navigation.push("SignupScreen")}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 70,
  },
  inputField: {
    borderRadius: 4,
    borderWidth: 1,
    padding: 8,
    backgroundColor: "#FAFAFA",
    marginBottom: 14,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    padding: 8,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  }),
  buttonText: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 18,
  },
  signupContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default LoginForm;
