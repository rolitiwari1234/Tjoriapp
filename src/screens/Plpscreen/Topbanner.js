import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Topbanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topview}>
        <Image
          source={require("../../../assets/images/Plpbanner.png")}
          style={styles.img}
        />

        <View style={styles.textview}>
          <Text style={styles.text}>The Blouse Diaries</Text>
        </View>
      </View>
    </View>
  );
};

export default Topbanner;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,

  },
  img: {
    width: "100%",
    height: 112,
    alignSelf: "center",
  },
  topview: {
    // position: "absolute",
  },
  textview: {
    position: "absolute",
    left: "50%",
    width: 100,
    top: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
