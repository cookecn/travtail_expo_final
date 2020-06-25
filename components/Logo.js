import * as React from "react";
import { Image, View } from "react-native";

class LogoComponent extends React.Component {
  render() {
    return (
      <View>
        <Image
        style={{
            width: 350,
            height: 75,
            resizeMode: 'contain',
        justifyContent: 'center' }}
          source={require("../img/logo.png")}
        />
      </View>
    );
  }
}

export default LogoComponent;
