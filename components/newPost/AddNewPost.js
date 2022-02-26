import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormikPostUploader />
    </View>
  );
};

const Header = ({ navigation }) => (
  <View style={[styles.headerContainer, { marginTop: 40 }]}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={{ uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png" }}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>NEW POST</Text>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 25,
  },
});

export default AddNewPost;