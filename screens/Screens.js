import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider, Card, Title, Paragraph, IconButton, Colors } from 'react-native-paper';



//Styles for All Screens
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        alignItems: "center",
        color: "red",
        backgroundColor: "transparent",
        padding: 5,
        marginTop: 10
    },
    baseText: {
        fontWeight: 'bold',
        fontSize: 24
    },
    profileContainer: {
        flex: 1
    },
    weeklyEarningsText: {
        marginTop: 50,
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 5

    },
    cardTextWeekly: {
        alignItems: 'center',
        justifyContent: 'center'
    }

});

//ProfileContainer for Profile Screen only
const ProfileContainer = ({ children }) => (
    <View style={styles.profileContainer}>{children}</View>
);

//Profile Screen with ProfileContainer allowing for nesting
export const Profile = ({ navigation }) => {
    return (
        <ProfileContainer>
            <Text style={styles.weeklyEarningsText}>Weekly Earnings</Text>
            <Divider />
            <ProfileContainer>
                <Card>
                    <Card.Content style={styles.cardTextWeekly}>
                        <Title>Jul 16 - 22</Title>
                        <Paragraph>$381.10</Paragraph>
                        <IconButton icon="folder" color={Colors.red500} size={24} onPress={() => navigation.push("Details", { name: "Details" })} />
                    </Card.Content>
                </Card>
                <ProfileContainer>
                    <Divider />
                    <Card>
                    <Card.Content style={styles.cardTextWeekly}>
                        <Title>Jul 9 - 15</Title>
                        <Paragraph>$381.10</Paragraph>
                        <IconButton icon="folder" color={Colors.red500} size={24} onPress={() => navigation.push("Details", { name: "Details" })} />
                    </Card.Content>
                </Card>
                </ProfileContainer>
            </ProfileContainer>
        </ProfileContainer>
    )
}

//ScreenContainer = used in all screens to center content at a flex: 1, justifyContent: 'center', and alignItems: 'center'
const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

//Home Screen
export const Home = ({ navigation }) => {
    return (
        <ScreenContainer>
            <Text style={styles.baseText}>Home</Text>
            <TouchableOpacity style={styles.button} title="Details" onPress={() => navigation.push("Details", { name: "Details" })}>
                <Text>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} title="Search" onPress={() => navigation.push("Search", { name: "Search" })}>
                <Text>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} title="Profile" onPress={() => navigation.push("Profile", { name: "Profile" })}>
                <Text>Profile</Text>
            </TouchableOpacity>
        </ScreenContainer>
    );
}

//Details Screen
//Buttons to go Home, to Search Screen, and to Go Back
export const Details = ({ navigation, route }) => {
    return (
        <ScreenContainer>
            <Text style={styles.baseText}>Details</Text>
            <TouchableOpacity style={styles.button} title="Home" onPress={() => navigation.push("Home", { name: "Home" })}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} title="Search" onPress={() => navigation.push("Search", { name: "Search" })}>
                <Text>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} title="Go Back" onPress={() => navigation.goBack("Go Back")}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        </ScreenContainer>
    );
}

//Search Screen
//Buttons to go Home, or back to Details page
export const Search = ({ navigation }) => {
    return (
        <ScreenContainer>
            <Text style={styles.baseText}>Search</Text>
            <TouchableOpacity style={styles.button} title="Home" onPress={() => navigation.push("Home", { name: "Home" })}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} title="Go Back" onPress={() => navigation.goBack("Go Back")}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        </ScreenContainer>
    );
}
