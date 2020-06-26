import * as React from "react";
import { ImageBackground, View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

class HeroComponent extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../img/croppedworker.jpg")}
        style={styles.heroHeaderStyle}
        resizeMode="contain"
      >
        <LinearGradient
          colors={["rgba(98,29,235,0.3)", "rgba(98,29,235,0.3)"]}
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: 0,
            right: 0,
            top: 6,
            height: 188,
          }}
        >
          <Text style={styles.textStyle}>Weekly Earnings</Text>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  heroHeaderStyle: {
    height: 200,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
      color: 'white',
      fontSize: 36,
      fontWeight: 'bold'
  }
});

export default HeroComponent;