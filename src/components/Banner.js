import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Banner = ({ img, toptext, bottext }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgview}>
        <Image source={img} style={styles.img} />
        <View style={styles.textview}>
          <Text style={styles.toptext}>{toptext}</Text>
          <Text style={styles.text}>{bottext}</Text>
          <View style={styles.btn}>
            <Image source={require("../../assets/images/Fillbutton.png")} />
            <Text style={styles.btntext}>Explore</Text>
          </View>
        </View>
      </View>
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
    height: 272,
    borderRadius: 4,
  },
  textview: {
    position: "absolute",
    left: "45%",
    top: 50,
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
    top: 20,
    bottom: 10,
  },
  btntext: {
    position: "absolute",
  },
});

// import React from "react";
// import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
// import Carousel, { PaginationLight } from "react-native-x-carousel";

// const { width } = Dimensions.get("window");

// const DATA = [
//   {
//     image: require("../../assets/images/Banner1.png"),
//   },
//   {
//     image: require("../../assets/images/Banner2.png"),
//   },
//   {
//     image: require("../../assets/images/Banner6.png"),
//   },
// ];

// const Banner = ({ toptext, bottext}) => {
//   const renderItem = (data) => (
//     <View key={data.ImageUri} style={styles.cardContainer}>
//       <View style={styles.cardWrapper}>
//         <Image style={styles.card} source={data.image} />
//         <View style={{ position: "absolute", left: "45%", top: 40 }}>
//           <Text style={{ fontSize: 26, color: "#fff", width: 150 }}>
//             {toptext}
//           </Text>
//           <Text style={styles.text}>{bottext}</Text>
//           <View style={styles.btn}>
//             <Image source={require("../../assets/images/Fillbutton.png")} />
//             <Text style={styles.btntext}>{'Explore'}</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         pagination={PaginationLight}
//         renderItem={renderItem}
//         data={DATA}
//         loop
//         autoplay
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 20,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   cardContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     width,
//   },
//   cardWrapper: {
//     borderRadius: 8,
//   },
//   card: {
//     width: width * 0.9,
//     height: 241,
//     borderRadius: 4,
//   },
//   text: {
//     color: "#fff",
//     width: 150,
//     top: 10,
//   },
//   btn: {
//     justifyContent: "center",
//     alignItems: "center",
//     left: 30,
//     top: 10,
//     right: 10,
//   },
//   btntext: {
//     position: "absolute",
//   },
// });
// export default Banner;
