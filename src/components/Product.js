import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Bannerdata from "../../src/utils/Bannerdata";

const Product = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Bannerdata}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imgview}>
            <Image
              source={item.image}
              style={{ width: 146, height: 194, borderRadius: 5 }}
            />
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    marginHorizontal:10,
    justifyContent: "center",
    alignItems: "center",
  },
  imgview: {
    margin: 10,
  },
  text: {
    width: 146,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
});
