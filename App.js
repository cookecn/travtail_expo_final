import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Details, Search, Profile, Home } from "./screens/Screens";
import { Provider as PaperProvider } from "react-native-paper";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
          <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
          <Drawer.Screen name="Details" component={Details}></Drawer.Screen>
          <Drawer.Screen name="Search" component={Search}></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
