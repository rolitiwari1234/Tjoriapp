import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../src/components/Header";
import Categorieslogo from "../../src/components/Categorieslogo";
import Product from "../../src/components/Product";
import Section from "../../src/components/Section";
import Banner from "../components/Banner";

const Homescreen = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header text={"Tjori"} />
        <Categorieslogo />
        <Banner
          img={require("../../assets/images/Banner1.png")}
          toptext={"Bazaars of morocco"}
          bottext={
            " Inspired by beautiful Moroccan jewellery and handcrafted by the skilled artisans of India."
          }
        />
        <Product />
        <Banner
          img={require("../../assets/images/Banner2.png")}
          toptext={"The Mansha Collection"}
          bottext={"An amalgamation of modal silk and exquisite craftsmanship"}
        />
        <Section
          toptext={"Maharashtrian Reglia"}
          bottext={"Traditional Marathi Jewelry"}
          img={require("../../assets/images/Banner3.png")}
        />
        <Product />
        <Section
          toptext={"The Experimental"}
          bottext={"Chomuk Mirror Embroidery Suede Mules & Heels"}
          img={require("../../assets/images/Banner4.png")}
        />
        <Product />
        <Section
          toptext={"The Silk Route"}
          bottext={"This festive season, stun with the power of silk."}
          img={require("../../assets/images/Banner5.png")}
        />
        <Product />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;
