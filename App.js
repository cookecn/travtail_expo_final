import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Details, Search, Profile } from './screens/Screens';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
        <Drawer.Screen name="Details" component={Details}></Drawer.Screen>
        <Drawer.Screen name="Search" component={Search}></Drawer.Screen>
        <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
