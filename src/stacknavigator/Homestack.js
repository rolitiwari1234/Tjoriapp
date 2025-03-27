import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categorypage from "../../src/screens/category/Categorypage";
import Plppage from "../../src/screens/plpscreen/Plppage";
import Pdppage from "../../src/screens/plpscreen/Pdppage";
import Productdetails from "../../src/screens/Productdetails";
import Homescreen from "../../src/tabnavigator/Homescreen";

const Stack = createNativeStackNavigator();

const Homestack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Homescreen" component={Homescreen} />
      <Stack.Screen name="Categorypage" component={Categorypage} />
      <Stack.Screen name="Plppage" component={Plppage} />
      <Stack.Screen name="Pdppage" component={Pdppage} />
      <Stack.Screen name="Productdetails" component={Productdetails} />
    </Stack.Navigator>
  );
};

export default Homestack;
