import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { DataTable } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";


import BarChartComponent from '../components/BarChart';
import HeroComponent from '../components/Hero';


const styles = StyleSheet.create({
    heroHeaderStyle: {
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
      }
})


//ProfileContainer for Profile Screen only
const ProfileContainer = ({ children }) => (
    <View style={styles.profileContainer}>{children}</View>
);

//Profile Screen with ProfileContainer allowing for nesting
//Future build: Add database for the title/paragraph and icon, allowing for items to be .map and appear in a list.
export const Profile = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <ImageBackground
                    source={require("../img/calculator.jpg")}
                    style={styles.heroHeaderStyle}
                    resizeMode="stretch"
                >
                    <LinearGradient
                        colors={["rgba(98,29,235,0.3)", "rgba(98,29,235,0.3)"]}
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: 0,
                            height: 100,
                        }}
                    >
                        <Text style={styles.textStyle}>HISTORICAL EARNINGS</Text>
                    </LinearGradient>
                </ImageBackground>

                <BarChartComponent />
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 20,
                        backgroundColor: 'white'
                    }}
                >
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Current YTD</Text>
                    <Text style={{ fontSize: 14 }}>You've earned $16,331.00 and worked 316 jobs!</Text>
                </View>
                <HeroComponent />
                <View
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                >
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Weekly Payouts</DataTable.Title>
                            <DataTable.Title numeric>Value</DataTable.Title>
                        </DataTable.Header>
                        <DataTable.Row>
                            <DataTable.Cell>Current Week</DataTable.Cell>
                            <DataTable.Cell
                                numeric
                                onPress={() =>
                                    navigation.navigate("Details", { name: "Details" })
                                }
                            >
                                $585.00
                </DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Jul 8 - 14</DataTable.Cell>
                            <DataTable.Cell numeric>$612.00</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Jul 1 - 7</DataTable.Cell>
                            <DataTable.Cell numeric>$385.00</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Jun 24 - 30</DataTable.Cell>
                            <DataTable.Cell numeric>$689.00</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Jun 17 - 23</DataTable.Cell>
                            <DataTable.Cell numeric>$565.00</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Jun 10 - 16</DataTable.Cell>
                            <DataTable.Cell numeric>$412.00</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Jun 3 - 9</DataTable.Cell>
                            <DataTable.Cell numeric>$732.00</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>May 27 - Jun 2</DataTable.Cell>
                            <DataTable.Cell numeric>$641.00</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Prior Weeks</DataTable.Cell>
                            <DataTable.Cell numeric>$16,652.00</DataTable.Cell>
                        </DataTable.Row>

                    </DataTable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};