import React from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
//import { withAuthenticator } from "aws-amplify-react-native";
import { Details, Search, Profile, Home } from "./screens";
import Ionicons from "@expo/vector-icons/Ionicons";

//import Amplify from "aws-amplify";
//import awsconfig from "./aws-exports";

//Amplify.configure(awsconfig);

const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-home"
              : "ios-home";
          } else if (route.name === "Profile") {
            iconName = focused ? "md-person" : "md-person";
          } else if (route.name === "Details") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "indigo",
        inactiveTintColor: "white",
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: '#593196'
      }}
    >
      <Tab.Screen component={Home} name="Home" />
      <Tab.Screen
        component={Profile}
        name="Profile"
        options={{ title: "Profile" }}
      />
      <Tab.Screen
        component={Details}
        name="Details"
        options={{ title: "Details" }}
      />
      {/*<Tab.Screen
        component={Search}
        name="Search"
        options={{ title: "Search" }}
      />*/}
    </Tab.Navigator>
  );
};

/*function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={TabRoutes}
        options={{ title: "Home" }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}*/

function ActionBarIcon() {
  return (
    <Image
      source={require("./assets/arrow-left.png")}
      style={{ width: 40, height: 40, borderRadius: 40 / 2, marginLeft: 15 }}
    />
  );
}
const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => {
          //navigation.dispatch(DrawerActions.openDrawer());
          navigation.goBack("Home", { title: "Home" });
        }}
      >
        <ActionBarIcon />
      </TouchableOpacity>
    </View>
  );
};

class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={TabRoutes}
              options={{
                headerLeft: ({}) => <HeaderLeft />,
                headerStyle: { backgroundColor: "indigo" },
                headerTitleStyle: { color: "white" },
              }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  }
}

//export default withAuthenticator(App, true);
export default App;
