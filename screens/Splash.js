import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

function Splash(props) {
    console.log(props);
    return (
        <View>
            <Text>Splash</Text>
            <Button title="Go to Login" onPress={() => props.navigation.replace("Login")} />

        </View>
    )
}

const styles = StyleSheet.create({});

export default Splash;