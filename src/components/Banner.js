import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Banner = ({ img, toptext, bottext, onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9}>
        <View style={styles.imgview}>
          <Image source={img} style={styles.img} />

          <View style={styles.textview}>
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.toptext}>{toptext}</Text>
              <Text style={styles.text}>{bottext}</Text>
            </TouchableOpacity>
            <View style={styles.btn}>
              <Image source={require("../../assets/images/Fillbutton.png")} />
              <Text style={styles.btntext}>Explore</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  imgview: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "90%",
    height: 290,
    borderRadius: 4,
  },
  textview: {
    position: "absolute",
    left: "45%",
    top: 30,
    height: 230,
  },
  toptext: {
    fontSize: 26,
    color: "#fff",
    width: 150,
  },
  text: {
    width: 200,
    color: "#fff",
    marginTop: 20,
    fontSize: 15,
    color: "#8A8988",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    top: "10%",
    marginBottom: 10,
  },
  btntext: {
    position: "absolute",
  },
});
