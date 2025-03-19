import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/src/components/Header";
import Categorieslogo from "@/src/components/Categorieslogo";
import Banner from "@/src/components/Banner";
import Section from "@/src/components/Section";
import Product from "@/src/components/Product";

const Categorypage = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <Header text={"Appreal"} />
        <Categorieslogo />
        <Banner
          img={require("../../../assets/images/Banner6.png")}
          toptext={"The Bold Bhujodi"}
          bottext={"An amalgamation of modal silk and exquisite craftsmanship"}
        />
        <Section
          toptext={"The Blouse Diaries"}
          bottext={"Blouses for every reason and season"}
          img={require("../../../assets/images/Banner7.png")}
        />
        <Product />
        <Section
          toptext={"Kanisa"}
          bottext={"Beautiful Kani Woven Pure Wool Apparel"}
          img={require("../../../assets/images/Banner8.png")}
        />
        <Product />
        <Section
          toptext={"New Arrivals"}
          bottext={"This festive season, stun with the power of silk."}
          img={require("../../../assets/images/Banner9.png")}
        />
        <Product />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Categorypage;

const styles = StyleSheet.create({});
