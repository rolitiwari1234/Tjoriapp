import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";


const Header = ({props,text}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.icon}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={10}
          fill="none"
          {...props}
        >
          <Path
            fill="#4B4B4A"
            fillRule="evenodd"
            d="M10 0c3.806 0 7.115 2.232 8.805 5.517C19.567 7 20 8.157 20 9.961H0c0-1.818.44-2.989 1.214-4.48C2.91 2.216 6.208 0 10 0Z"
            clipRule="evenodd"
          />
        </Svg>
        
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25211E",
    height: 62,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "#C0B394",
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  icon: {
    right: 20,
  },
});
