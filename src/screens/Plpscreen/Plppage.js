import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "../../../src/components/Header";
import Topbanner from "../../../src/screens/plpscreen/Topbanner"
import Plpdata from "../../../src/utils/Plpdata";
import Modal from "react-native-modal";
import {
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";

const sortdata = [
  { title: "Best Seller" },
  { title: "Price high to seller" },
  { title: "Price low to high" },
];

const sizeselected = ["S", "M", "L", "XL", "XXL", "XXL"];

const Plppage = () => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [category, setCategory] = useState();
  const [size, setSize] = useState();
  const [colour, setColour] = useState();

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header text={"The Blouses Diaries"} />
        <Topbanner />
        <FlatList
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          data={Plpdata}
          numColumns={2}
          pagingEnabled={false}
          renderItem={({ item, index }) => {
            return (
              <View
                key={index}
                style={{
                  marginHorizontal: 10,
                  alignSelf: "center",
                   width: "50%",
                }}
              >
                <View style={styles.imgview}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() =>
                      navigation.navigate("Pdppage", {
                        id: item.id,
                      })
                    }
                  >
                    <View
                      style={{
                        width: "100%",
                      }}
                    >
                      <Image source={item.image} style={styles.img} />
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
        <TouchableOpacity onPress={() => setVisible(true)} activeOpacity={0.9}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              bottom: 10,
            }}
          >
            <Image source={require("../../../assets/images/Fillbutton.png")} />
            <Text style={styles.filterbtn}>Filter</Text>
          </View>
        </TouchableOpacity>

        <Modal
          style={styles.modalstyle}
          isVisible={visible}
          animationIn={"slideInUp"}
          onBackdropPress={() => {
            setVisible(false);
          }}
        >
          <View style={styles.modalview}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {toggle ? (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => setToggle(!toggle)}
                >
                  <Text style={styles.text}>Sort By</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setToggle(!toggle)}>
                  {sortdata.map((item, index) => {
                    return (
                      <View key={index}>
                        <Text style={{ padding: 5, textAlign: "center" }}>
                          {item.title}
                        </Text>
                      </View>
                    );
                  })}
                </TouchableOpacity>
              )}
              {category ? (
                <TouchableOpacity onPress={() => setCategory(!category)}>
                  <Text style={styles.text}>Category</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setCategory(!category)}>
                  <View>
                    <Text style={{ textAlign: "center", padding: 5 }}>
                      Appreal
                    </Text>
                    <Text style={{ textAlign: "center", padding: 5 }}>
                      Jewelry
                    </Text>
                    <Text style={{ textAlign: "center", padding: 5 }}>
                      Accessories
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              {size ? (
                <TouchableOpacity onPress={() => setSize(!size)}>
                  <Text style={styles.text}>Size</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setSize(!size)}>
                  <View
                    style={{
                      margin: 5,
                    }}
                  >
                    <ScrollView horizontal>
                      {sizeselected.map((size, index) => (
                        <View key={index} style={styles.sizeview}>
                          <View style={styles.sizesel}>
                            <Text>{size}</Text>
                          </View>
                        </View>
                      ))}
                    </ScrollView>
                  </View>
                </TouchableOpacity>
              )}
              {colour ? (
                <TouchableOpacity onPress={() => setColour(!colour)}>
                  <Text style={styles.text}>Colour</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setColour(!colour)}>
                  <View
                    style={{
                      flexDirection: "row",
                      margin: 5,
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <View style={styles.sizeview}>
                      <Text
                        style={[styles.color, { backgroundColor: "black" }]}
                      ></Text>
                    </View>
                    <View style={styles.sizeview}>
                      <Text
                        style={[styles.color, { backgroundColor: "brown" }]}
                      ></Text>
                    </View>
                    <View style={styles.sizeview}>
                      <Text
                        style={[
                          styles.color,
                          { backgroundColor: "lightgreen" },
                        ]}
                      ></Text>
                    </View>
                    <View style={styles.sizeview}>
                      <Text
                        style={[styles.color, { backgroundColor: "skyblue" }]}
                      ></Text>
                    </View>
                    <View style={styles.sizeview}>
                      <Text
                        style={[styles.color, { backgroundColor: "orange" }]}
                      ></Text>
                    </View>
                    <View style={styles.sizeview}>
                      <Text
                        style={[styles.color, { backgroundColor: "purple" }]}
                      ></Text>
                    </View>
                    <View style={styles.sizeview}>
                      <Text
                        style={[styles.color, { backgroundColor: "purple" }]}
                      ></Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}

              <Text style={styles.text}>Price</Text>
            </ScrollView>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Plppage;

const styles = StyleSheet.create({
  imgview: {
    height: 343,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  img: {
    width: responsiveWidth(),
    height: 264,
    borderRadius: 4,
  },
  color: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  title: {
    color: "#000",
    width: 157,
    height: 36,
    marginHorizontal: 5,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  filterbtn: {
    textAlign: "center",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    fontSize: responsiveFontSize(2),
  },
  modalview: {
    width: "80%",
    height: 400,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    elevation: 0.8,
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 20,
  },
  modalstyle: {
    justifyContent: "flex-end",
  },

  text: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: 500,
    padding: 8,
    fontFamily: "PlayfairDisplay-Regular",
  },
  sorttext: {
    fontSize: 14,
    color: "#C0B394",
  },
  sizeview: {
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    margin: 8,
  },
});
