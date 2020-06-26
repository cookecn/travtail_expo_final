import * as React from "react";
import { ImageBackground, View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

class HeroComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../img/croppedworker.jpg")}
          style={styles.heroHeaderStyle}
          resizeMode="contain"
        >
          <LinearGradient
            colors={["rgba(98,29,235,0.3)", "rgba(98,29,235,0.3)"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 6,
              height: 188,
            }}
          >
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heroHeaderStyle: {
    height: 200,
    width: "100%",
  },
});

export default HeroComponent;
