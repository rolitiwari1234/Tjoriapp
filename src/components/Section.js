import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const Section = ({ toptext, bottext, img }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.toptext}>{toptext}</Text>
        <Text style={styles.bottext}>{bottext}</Text>
      </TouchableOpacity>

      <View style={styles.imgview}>
        <Image
          source={img}
          style={{ width: "90%", height: 372, borderRadius: 4 }}
        />
      </View>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  toptext: {
    fontSize: 28,
    textAlign: "center",
    color: "#065534",
  },
  bottext: {
    color: "#2B2B2B",
    fontSize: 14,
  },
  imgview: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
