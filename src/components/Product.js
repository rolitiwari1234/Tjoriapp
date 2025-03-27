import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Productdata from "../../src/utils/Productdata";
import { useNavigation } from "@react-navigation/native";

const Product = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={Productdata}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imgview}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate("Productdetails", {
                  id: item.id,
                })
              }
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 146, height: 194, borderRadius: 5 }}
              />
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
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
