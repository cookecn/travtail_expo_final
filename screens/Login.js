import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Button,
    Text,
    StatusBar
} from 'react-native';

function Login(props) {
    return (
        <View>
            <Text>Login</Text>
            <Button title="Go Home" onPress={() => props.navigation.replace('Home')} />
        </View>
    )
}

const styles = StyleSheet.create({});

export default Login;