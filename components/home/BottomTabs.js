import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const BottomTabs = () => {
  return (
    <View>
      <Divider width={1} orientation="vertical" />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity>
          <Image style={styles.icon} source={ require("../../assets/home_icon.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon} source={ require("../../assets/search.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon} source={ require("../../assets/reels.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon} source={ require("../../assets/shop.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon} source={ require("../../assets/user_icon.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    margin: 7,
  }
});

export default BottomTabs;
