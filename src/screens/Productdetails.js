import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Productdetails = ({ navigation, route }) => {
  const sizeselected = ["S", "M", "L", "XL", "XXL", "XXL"];

  console.log(route);
  const id = route.params.id;
  console.log(id);

  const data = Productdata.find((element) => {
    return id === element.id;
  });
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.9}
        >
          <View style={styles.arrowview}>
            <Ionicons name="arrow-back" size={23} color={"black"} />
          </View>
        </TouchableOpacity>
        <View>
          <Image
            source={{ uri: data.image }}
            resizeMode="contain"
            style={styles.img}
          />
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.chartview}>
            <Text>Size chart</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {sizeselected.map((size, index) => (
              <View key={index} style={styles.sizeview}>
                <View style={styles.sizesel}>
                  <Text>{size}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
          <View style={styles.offerview}>
            <View style={styles.tagimg}>
              <View style={{ alignSelf: "flex-end" }}>
                <Image source={require("../../assets/images/Tag.png")} />
              </View>
              <Text> (1.) Get 10% Cashback on purchase of this product</Text>
              <Text>
                {" "}
                (2.) Get a Virgin Coconut Milk Shampoo worth 899 FREE on all
                orders above 2000
              </Text>
              <View style={{ top: 50 }}>
                <Text style={{ color: "#0D5435", fontWeight: 500, bottom: 20 }}>
                  Terms & Conditions Apply
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Productdetails;

const styles = StyleSheet.create({
  arrowview: {
    marginTop: 5,
    marginHorizontal: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 558,
    height: 380,
    alignSelf: "center",
  },
  title: {
    color: "#000",
    height: 36,
    justifyContent: "center",
    alignSelf: "center",
    padding:10
   
  },
  chartview: {
    marginTop: 15,
    right: 10,
    alignSelf: "flex-end",
  },
  sizeview: {
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: "row",
    gap: 15,
  },
  tagimg: {
    marginHorizontal: 18,
    justifyContent: "center",
  },
  sizesel: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  offerview: {
    width: "90%",
    height: 200,
    alignSelf: "center",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    marginVertical: 30,
    backgroundColor: "white",
    padding: 5,
  },
});
