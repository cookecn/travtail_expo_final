import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LogoComponent from '../components/Logo';
import SearchBarComponent from '../components/SearchBar';

const styles = StyleSheet.Create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});


const HomeContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

const Home = () => {
    return (
        <HomeContainer>
            <Text style={{ fontWeight: "bold", fontSize: 48 }}>Welcome to,</Text>
            <LogoComponent />
            <View style={{ marginTop: 10 }}></View>
            <SearchBarComponent />
        </HomeContainer>
    );
};


export default Home;