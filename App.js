import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Details, Search, Profile } from './screens/Screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Details" component={Details}></Stack.Screen>
        <Stack.Screen name="Search" component={Search}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
