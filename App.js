import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  Header,
  HeaderBackButton,
} from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import {TouchableOpacity} from 'react-native-gesture-handler';

import { Details, Search, Profile, Home } from "./screens/Screens";
import Splash from "./screens/Splash";
import Login from "./screens/Login";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={Home} name="Home" />
      <Tab.Screen component={Profile} name="Profile" options={{ title: "Profile"}}/>
      <Tab.Screen component={Details} name="Details" options={{ title: 'Details'}}/>
      <Tab.Screen component={Search} name="Search" options={{ title: "Search" }}/>
    </Tab.Navigator>
  );
};

function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={TabRoutes} options={{ title: "Home" }}></Drawer.Screen>
      <Drawer.Screen name="Profile" component={Profile} options={{ title: "Profile" }}></Drawer.Screen>
      <Drawer.Screen name="Details" component={Details} options={{ title: "Details" }}></Drawer.Screen>
      <Drawer.Screen name="Search" component={Search} options={{ title: "Search" }}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

function ActionBarIcon() {
  return (
    <Image
    source={require('./assets/arrow-left.png')}
    style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft : 15 }} />
  );
}
const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
      >
        <ActionBarIcon/>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen
            name="Home"
            component={DrawerRoutes}
            options={{
              headerLeft: ({}) => <HeaderLeft />,
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
