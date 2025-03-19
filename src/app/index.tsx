import React from "react";

import Bottomnav from "../../src/tabnavigator/Bottomnav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categorypage from "../../src/screens/category/Categorypage";
import Plppage from "../../src/screens/Plpscreen/Plppage";

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bottomnav" component={Bottomnav} />
      <Stack.Screen name="Categorypage" component={Categorypage} />
      <Stack.Screen name="Plppage" component={Plppage} />
    </Stack.Navigator>
  );
};

export default Home;
