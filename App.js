import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Products } from "./src/views";
import DetailProducts from "./src/views/DetailProducts/DetailProducts";

const App = () => {
  const Stack = createNativeStackNavigator()
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Products" component={Products}></Stack.Screen>
        <Stack.Screen name="Detail" component={DetailProducts}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;