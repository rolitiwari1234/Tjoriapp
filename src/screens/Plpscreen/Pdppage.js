import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import Product from "@/src/components/Product";

const sizeselected = ["S", "M", "L", "XL", "XXL", "XXL"];

const Pdppage = ({ navigation, route, props }) => {
  console.log(route);

  const id = route.params.id;
  console.log(id);

  const selectedData = Plpdata.find((element) => {
    return id === element.id;
  });

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.9}
        >
          <View style={styles.arrowview}>
            <Ionicons name="arrow-back" size={23} color={"black"} />
          </View>
        </TouchableOpacity>
        <View style={styles.container}>
          <View>
            <Image
              source={selectedData.image}
              style={styles.img}
              resizeMode="contain"
            />
            <Text style={styles.title}>{selectedData.title}</Text>
          </View>
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
            <View
              style={{
                marginVertical: 0,
                marginHorizontal: 18,
                justifyContent: "center",
              }}
            >
              <View style={{ alignSelf: "flex-end" }}>
                <Image source={require("../../../assets/images/Tag.png")} />
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

          <View style={styles.uspview}>
            <View style={styles.handcraft}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={43}
                height={35}
                fill="none"
                {...props}
              >
                <Path
                  fill="#C2B497"
                  fillRule="evenodd"
                  d="M29.277 1.887c1.16.982 1.777 2.265 1.846 3.857.068 1.585-.412 2.937-1.442 4.056l-7.308 7.638c-.268.268-.57.405-.906.405-.336 0-.618-.137-.837-.405l-7.31-7.645c-1.07-1.118-1.564-2.47-1.475-4.056.09-1.585.714-2.868 1.874-3.857C14.61 1.077 15.64.673 16.8.673c.762 0 1.482.157 2.176.466a5.98 5.98 0 0 1 1.777 1.208l.734.803.735-.803a5.98 5.98 0 0 1 1.777-1.208 5.191 5.191 0 0 1 2.176-.466c1.18.006 2.203.411 3.102 1.214Z"
                  clipRule="evenodd"
                />
                <Path
                  fill="#25211E"
                  fillRule="evenodd"
                  d="M31.088 5.717c-.069-1.593-.686-2.876-1.846-3.857C28.35 1.05 27.32.652 26.147.645a5.19 5.19 0 0 0-2.175.467 5.978 5.978 0 0 0-1.778 1.208l-.734.803-.735-.803a5.978 5.978 0 0 0-1.777-1.208 5.275 5.275 0 0 0-2.176-.467c-1.16 0-2.189.405-3.08 1.208-1.16.988-1.785 2.271-1.874 3.857-.09 1.585.404 2.937 1.475 4.056l7.302 7.638c.22.268.501.405.837.405.337 0 .639-.137.906-.405l7.309-7.631c1.03-1.12 1.51-2.471 1.441-4.056Zm-2.08.192c-.02.96-.322 1.757-.905 2.381l-6.623 6.973-6.636-6.973c-.583-.624-.885-1.42-.906-2.381-.02-.961.343-1.77 1.105-2.443.535-.446 1.14-.673 1.812-.673.446 0 .878.103 1.304.302.418.2.768.453 1.036.769l2.278 2.347 2.279-2.347c.268-.31.61-.57 1.036-.769a3.022 3.022 0 0 1 1.304-.302c.673 0 1.277.227 1.812.673.762.665 1.125 1.482 1.105 2.443Zm-14.24 11.426 2.883 3.885c1.119 1.564 1.674 3.287 1.674 5.16v8.043a.524.524 0 0 1-.164.371.512.512 0 0 1-.37.165h-1.072a.524.524 0 0 1-.37-.165.512.512 0 0 1-.165-.37v-8.037a6.414 6.414 0 0 0-1.276-3.884l-2.883-3.884c-.178-.268-.411-.426-.707-.467a1.036 1.036 0 0 0-.802.199.936.936 0 0 0-.405.707 1.3 1.3 0 0 0 .164.768l2.08 2.951c.446.625.583 1.263.405 1.908-.179.645-.57 1.174-1.174 1.572a2.942 2.942 0 0 1-1.976.5c-.714-.068-1.366-.459-1.942-1.173l-4.358-5.23V10.37c0-.495-.179-.824-.536-1.002a1.138 1.138 0 0 0-1.07 0c-.357.178-.535.494-.535.94V21.7c0 .268.089.494.267.672l7.103 8.97c.673.803 1.07 1.812 1.208 3.013a.585.585 0 0 1-.165.432.512.512 0 0 1-.37.165h-1.07a.59.59 0 0 1-.372-.137.413.413 0 0 1-.164-.337c-.137-.761-.357-1.365-.673-1.811L.762 23.704a3.006 3.006 0 0 1-.735-2.01V10.3c0-.892.323-1.654.975-2.278.645-.625 1.407-.94 2.278-.94.872 0 1.62.336 2.244 1.001.625.673.94 1.455.94 2.347v9.183l4.153 4.893a.496.496 0 0 0 .535.199c.226-.048.377-.158.466-.336.09-.179.07-.378-.068-.604l-1.942-2.608a3.393 3.393 0 0 1-.639-2.114c.021-.782.282-1.441.77-1.976.802-.851 1.742-1.208 2.813-1.071.94.137 1.681.583 2.216 1.338Zm28.145 4.358V10.301c0-.892-.323-1.654-.975-2.272-.645-.624-1.407-.94-2.278-.94-.872 0-1.62.33-2.244 1.002-.625.673-.94 1.455-.94 2.347v9.19l-4.153 4.893a.492.492 0 0 1-.535.199c-.22-.048-.377-.158-.466-.337-.09-.178-.07-.377.068-.604l1.942-2.614a3.406 3.406 0 0 0 .639-2.114c-.021-.782-.275-1.441-.77-1.976-.802-.845-1.742-1.208-2.813-1.071-.933.13-1.674.576-2.21 1.338l-2.813 3.885c-1.16 1.516-1.743 3.239-1.743 5.16v8.05c0 .138.054.261.164.37.117.11.233.165.37.165h1.071c.138 0 .261-.054.37-.164a.523.523 0 0 0 .166-.37v-8.044c0-1.427.425-2.724 1.276-3.884l2.883-3.885c.185-.267.418-.418.706-.466.289-.048.556.02.803.199.24.185.385.418.433.707a.94.94 0 0 1-.2.768l-2.079 2.883c-.453.672-.583 1.331-.405 1.976.179.645.57 1.167 1.174 1.572a2.847 2.847 0 0 0 1.976.466c.714-.089 1.36-.466 1.942-1.139l4.358-5.23v-9.985c0-.487.179-.823.536-1.002a1.138 1.138 0 0 1 1.07 0c.357.179.536.495.536.94v11.393c0 .267-.062.494-.2.672l-7.171 8.984c-.673.803-1.05 1.805-1.14 3.013-.04.178-.006.322.104.432.11.11.253.164.432.164h1.07a.455.455 0 0 0 .337-.137.859.859 0 0 0 .199-.336c.09-.762.316-1.366.672-1.812l7.165-8.983a3.214 3.214 0 0 0 .673-2.01Z"
                  clipRule="evenodd"
                />
              </Svg>
              <Text
                style={{
                  width: "100%",
                  top: 5,
                  textAlign: "center",
                  padding: 5,
                }}
              >
                Hand Crafted
              </Text>
            </View>
            <View style={styles.handcraft}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={33}
                height={35}
                fill="none"
                {...props}
              >
                <Path
                  fill="#C2B497"
                  fillRule="evenodd"
                  d="M30.237 21.933c-1.475 3.219-3.438 6.033-5.895 8.442-2.052 2.01-4.2 3.465-6.437 4.357-.803.357-1.606.357-2.416 0-2.546-1.029-4.893-2.683-7.034-4.961-2.368-2.457-4.22-5.34-5.566-8.648-.294-.72-1.7-7.031-1.389-6.505C9 27.314 15.93 26.18 16.581 26.468c0 0 8.92 0 15.42-11.85.249-.456-1.445 6.592-1.764 7.315Z"
                  clipRule="evenodd"
                />
                <Path
                  fill="#25211E"
                  fillRule="evenodd"
                  d="M30.773 6.314a2.915 2.915 0 0 1 1.475 1.139c.357.535.535 1.14.535 1.812 0 4.605-.85 8.825-2.546 12.668-1.475 3.219-3.438 6.033-5.895 8.442-2.052 2.01-4.2 3.465-6.437 4.357-.803.357-1.606.357-2.416 0-2.546-1.03-4.893-2.683-7.034-4.961-2.368-2.457-4.22-5.34-5.566-8.648C1.373 17.419.611 13.459.611 9.258c0-.673.178-1.277.535-1.812a2.915 2.915 0 0 1 1.476-1.14L15.489.948c.803-.357 1.606-.357 2.416 0l12.868 5.367Zm-13.678 26.47c2.279-.893 4.427-2.437 6.437-4.626 2.142-2.327 3.823-5.024 5.024-8.112a28.582 28.582 0 0 0 2.08-10.788c0-.494-.227-.824-.673-1.002l-12.868-5.36a1.238 1.238 0 0 0-.803 0L3.425 8.256c-.447.178-.673.515-.673 1.002 0 3.754.693 7.35 2.08 10.788 1.207 3.081 2.882 5.785 5.023 8.112 2.01 2.189 4.152 3.733 6.437 4.625.268.09.535.09.803 0Zm9.917-20.644c0 .22-.062.398-.2.535L14.687 24.672a.627.627 0 0 1-.535.267.83.83 0 0 1-.604-.267l-5.765-5.765a1.011 1.011 0 0 1-.199-.604c0-.22.09-.398.268-.535l.535-.604a.996.996 0 0 1 .604-.2c.22 0 .398.062.536.2l4.625 4.694L25.07 11a.83.83 0 0 1 .604-.268c.22 0 .398.09.535.268l.604.535c.13.179.199.378.199.604Z"
                  clipRule="evenodd"
                />
              </Svg>
              <Text
                style={{
                  width: "100%",
                  top: 5,
                  textAlign: "center",
                  padding: 5,
                }}
              >
                100% Genuine
              </Text>
            </View>
            <View style={styles.handcraft}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={39}
                height={35}
                fill="none"
                {...props}
              >
                <Path
                  fill="#C2B497"
                  fillRule="evenodd"
                  d="M22.441 11.118 21 12.558l.206 2.06-1.784-1.03-1.785 1.03.343-2.06-1.44-1.44 1.99-.344.96-1.852.961 1.852 1.99.344Zm1.922 12.833c1.441-1.098 2.608-2.608 3.5-4.53.369-.05.628-4.729.137-4.158-5.5 6.394-11.5 6.394-17.5 0-.43-.459.122 4.109.412 4.159.892 1.921 2.059 3.43 3.5 4.529 1.304 1.03 2.608 1.647 3.98 1.922h1.99c1.442-.275 2.745-.893 3.98-1.922Z"
                  clipRule="evenodd"
                />
                <Path
                  fill="#25211E"
                  fillRule="evenodd"
                  d="M30.196 4.598h7.755a.78.78 0 0 1 .549.206.78.78 0 0 1 .206.549v4.186c0 1.373-.48 2.814-1.441 4.187-.961 1.44-2.196 2.607-3.843 3.637a13.662 13.662 0 0 1-5.56 2.059c-.891 1.921-2.058 3.43-3.5 4.529-1.235 1.03-2.538 1.647-3.98 1.922v6.52h5.765c.48 0 .892.136 1.235.48.343.343.48.755.48 1.235 0 .137-.068.206-.137.274-.068.069-.205.069-.274.069H11.323c-.068 0-.205 0-.274-.069-.069-.068-.137-.137-.137-.274 0-.48.137-.892.48-1.235.343-.344.755-.48 1.235-.48h5.765v-6.52c-1.372-.275-2.676-.893-3.98-1.922-1.442-1.098-2.608-2.608-3.5-4.53a15.99 15.99 0 0 1-5.56-2.058c-1.509-1.03-2.813-2.265-3.774-3.637-.96-1.442-1.44-2.814-1.44-4.187V5.353a.78.78 0 0 1 .205-.55.78.78 0 0 1 .55-.205h7.754v-3.5a.78.78 0 0 1 .206-.549.78.78 0 0 1 .549-.206h19.833a.78.78 0 0 1 .55.206c.342.137.411.343.411.549v3.5Zm-4.598 5.49c-.069-.274-.274-.412-.549-.48l-3.363-.48-1.44-3.089c-.138-.274-.344-.412-.687-.412-.343 0-.55.138-.687.412l-1.44 3.088-3.432.48c-.275 0-.412.207-.55.481-.136.275-.068.55.138.755l2.47 2.334-.617 3.362c-.069.343 0 .55.275.755.206.206.48.206.755.069l3.02-1.579 3.087 1.579c.275.137.48.137.755-.069.206-.206.343-.412.275-.755l-.618-3.363 2.47-2.333c.207-.206.275-.48.138-.755Zm-3.157 1.03L21 12.558l.206 2.06-1.784-1.03-1.785 1.03.343-2.06-1.44-1.44 1.99-.344.96-1.852.96 1.852 1.991.344ZM3.294 12.422c-.618-1.03-.96-1.99-.96-2.883V6.725h6.45v1.579c0 3.294.48 6.176 1.304 8.716a11.196 11.196 0 0 1-4.117-1.853c-1.167-.824-2.06-1.716-2.677-2.745Zm16.196 11.46c1.579 0 3.02-.686 4.324-2.059 1.304-1.372 2.333-3.294 3.088-5.695.755-2.402 1.167-5.01 1.167-7.824V2.402H10.912v5.902c0 2.814.411 5.421 1.166 7.824.755 2.401 1.785 4.254 3.089 5.695 1.304 1.373 2.745 2.06 4.323 2.06ZM36.647 6.725V9.54c0 .892-.343 1.853-.96 2.883-.687 1.029-1.58 1.921-2.677 2.745-1.304.892-2.608 1.51-4.05 1.853.824-2.54 1.236-5.422 1.236-8.716V6.725h6.451Z"
                  clipRule="evenodd"
                />
              </Svg>
              <Text
                style={{ width: 70, top: 5, textAlign: "center", padding: 5 }}
              >
                High Quality
              </Text>
            </View>
          </View>
          <View style={styles.detailview}>
            <View style={styles.desview}></View>
            <View style={styles.shippingview}>
              <Text>
                This product is specially handcrafted for each customer and
                ships in 5 - 7 days. We assure the authenticity and quality of
                our products before delivery and ensure that each exquisite
                piece meets your expectations.
              </Text>
            </View>
            <View style={styles.returnview}>
              <Text>
                {" "}
                Our return policy may vary based on products. Please read our
                policy by clicking here for more details.
              </Text>
              <Text style={{ marginTop: 20 }}>
                {" "}
                We are always there to help and you can write to us at
                support@tjori.com or speak to us at +91-8033947795 if you are
                not happy with the product you have received.
              </Text>
            </View>
          </View>
          <Product />

          <View>
            <Image
              source={require("../../../assets/images/Fillbutton.png")}
              style={styles.fillbtn}
            />
          </View>
        </View>
        <View style={styles.btnview}>
          <Text style={styles.btntext}>Add To Bag</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  arrowview: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: 380,
    alignSelf: "center",
  },
  title: {
    color: "#000",
    height: 36,
    padding: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  chartview: {
    right: 10,
    alignSelf: "flex-end",
  },
  sizeview: {
    marginTop: 10,
    flexDirection: "row",
    gap: 15,
    marginHorizontal: 10,
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
    width: "95%",
    height: 200,
    borderRadius: 4,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    marginVertical: 30,
    backgroundColor: "white",
    padding: 5,
  },
  uspview: {
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },
  handcraft: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 10,
  },
  detailview: {},
  desview: {},
  shippingview: {
    marginTop: 200,
    marginHorizontal: 10,
  },
  returnview: {
    marginVertical: 50,

    justifyContent: "center",
    alignItems: "left",
    marginHorizontal: 10,
  },
  section1: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  section2: {
    marginVertical: 20,
  },
  fillbtn: {
    width: "100%",
    height: 60,
    marginVertical: 10,

    shadowColor: "#000",
    shadowOpacity: 0.1,
  },
  btnview: {
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D5435",
  },
  btntext: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
  },
});

export default Pdppage;
