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
import React from "react";
import Header from "../../../src/components/Header"
import Topbanner from '../../../src/screens/Plpscreen/Topbanner'
import Plpdata from '@/src/utils/Plpdata'
import {
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";

const Plppage = () => {
  const navigation = useNavigation();
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
              <View key={index} style={styles.itemview}>
                <View style={styles.imgview}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Pdppage", {
                        id: item.id,
                      })
                    }
                  >
                    <View
                      style={{
                        marginHorizontal: 3,
                        width: responsiveWidth(),
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
  },
  img: {
    width: responsiveWidth(),
    height: 264,
    borderRadius: 4,
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
});
