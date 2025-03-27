import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Logodata from '@/src/utils/Logodata'
import { useNavigation } from "@react-navigation/native";

const Categorieslogo = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Categorypage")}
        activeOpacity={0.9}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Logodata}
          renderItem={({ item }) => (
            <View style={styles.logoview}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.title}</Text>
            </View>
          )}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Categorieslogo;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  logoview: {
    marginHorizontal: 10,
  },
  image: {
    borderRadius: 50,
  },
  text: {
    justifyContent: "center",
    alignSelf: "center",
  },
});
