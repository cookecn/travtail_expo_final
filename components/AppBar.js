import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Details, Profile } from '../screens/Screens';
const Stack = createStackNavigator();

class AppBarComponent extends React.Component {
  render() {
    return(
<Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header: ({ navigation, scene }) => (
            <Appbar.Header>
              <Appbar.BackAction onPress={() => navigation.goBack()} />
              <Appbar.Action
                icon="menu"
                onPress={() =>
                  navigation.openDrawer()
                }
              />
            <Appbar.Content title={scene.descriptor.options.title} />
          </Appbar.Header>
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
            <Stack.Screen
        name="Details"
        component={Details}
        options={{ title: 'Details' }}
      />
            <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Profile' }}
      />
    </Stack.Navigator>
    )
  }
}

export default AppBarComponent;
