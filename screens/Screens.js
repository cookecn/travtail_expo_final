import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Divider,
  Card,
  Title,
  Paragraph,
  IconButton,
  Colors,
  List,
} from "react-native-paper";
import SearchBarComponent from "../components/SearchBar";


//Styles for All Screens
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    color: "red",
    backgroundColor: "transparent",
    padding: 5,
    marginTop: 10,
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  homeText: {
    fontWeight: "bold",
    fontSize: 48,
  },
  profileContainer: {
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
  },
  doubleCardContainer: {
    flexDirection: "row",
  },
  weeklyEarningsText: {
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 5,
  },
  cardTextWeekly: {
    alignItems: "center",
    justifyContent: "center",
  },
  listItemSummary: {
    height: 36,
  },
});

//ProfileContainer for Profile Screen only
const ProfileContainer = ({ children }) => (
  <View style={styles.profileContainer}>{children}</View>
);

//Profile Screen with ProfileContainer allowing for nesting
//Future build: Add database for the title/paragraph and icon, allowing for items to be .map and appear in a list.
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
            <IconButton
              icon="folder"
              color={Colors.red500}
              size={24}
              onPress={() =>
                navigation.navigate("Details", { name: "Details" })
              }
            />
          </Card.Content>
        </Card>
          <Divider />
          <Card>
            <Card.Content style={styles.cardTextWeekly}>
              <Title>Jul 9 - 15</Title>
              <Paragraph>$381.10</Paragraph>
              <IconButton
                icon="folder"
                color={Colors.red500}
                size={24}
                onPress={() =>
                  navigation.navigate("Details", { name: "Details" })
                }
              />
            </Card.Content>
          </Card>
          <Divider />
          <Card>
            <Card.Content style={styles.cardTextWeekly}>
              <Title>Jul 2 - 8</Title>
              <Paragraph>$381.10</Paragraph>
              <IconButton
                icon="folder"
                color={Colors.red500}
                size={24}
                onPress={() =>
                  navigation.navigate("Details", { name: "Details" })
                }
              />
            </Card.Content>
          </Card>
        </ProfileContainer>
      </ProfileContainer>
  );
};

const DetailsContainer = ({ children }) => (
  <View style={styles.detailsContainer}>{children}</View>
);
const DoubleCardContainer = ({ children }) => (
  <View style={styles.doubleCardContainer}>{children}</View>
);

//Details Screen
//Buttons to go Home, to Search Screen, and to Go Back
export const Details = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <DetailsContainer>
          <Card>
            <Card.Content
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Title style={{ fontSize: 48, padding: 40 }}>$300.00</Title>
              <Text>Summary</Text>
            </Card.Content>
          </Card>

          <Divider />
          <List.Section>
            <List.Item
              title="Batches"
              right={() => <List.Icon icon="folder" />}
              style={styles.listItemSummary}
            />
            <List.Item
              title="Instacart Payment"
              right={() => <List.Icon icon="folder" />}
              style={styles.listItemSummary}
            />
            <List.Item
              title="Customer Tips"
              right={() => <List.Icon icon="folder" />}
              style={styles.listItemSummary}
            />
            <List.Item
              title="Earnings Adjustment"
              right={() => <List.Icon icon="folder" />}
              style={styles.listItemSummary}
            />
            <List.Item
              title="One-Time Payment"
              right={() => <List.Icon icon="folder" />}
            />
          </List.Section>
          <DoubleCardContainer>
            <Card style={{ width: "50%" }}>
              <Card.Content
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Title>Time Card</Title>
                <Paragraph>Current Week</Paragraph>
              </Card.Content>
            </Card>
            <Card style={{ width: "50%" }}>
              <Card.Content
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Title>Time Card</Title>
                <Paragraph>Last Week</Paragraph>
              </Card.Content>
            </Card>
          </DoubleCardContainer>
          <DetailsContainer>
            <Text style={{ marginTop: 20 }}></Text>
          </DetailsContainer>
          <Card>
            <Card.Content
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Paragraph>Daily Earnings</Paragraph>
            </Card.Content>
          </Card>
          <List.Section>
            <List.Item
              title="First Item"
              right={() => <List.Icon icon="folder" />}
              style={{ borderBottomWidth: 1 }}
            />
            <List.Item
              title="First Item"
              right={() => <List.Icon icon="folder" />}
              style={{ borderBottomWidth: 1 }}
            />
            <List.Item
              title="First Item"
              right={() => <List.Icon icon="folder" />}
              style={{ borderBottomWidth: 1 }}
            />
          </List.Section>
        </DetailsContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

const SearchContainer = ({ children }) => (
  <View style={styles.searchContainer}>{children}</View>
); //Search Screen
//Buttons to go Home, or back to Details page
export const Search = ({ navigation }) => {
  return (
    <SearchContainer>
      <SearchBarComponent />
      <TouchableOpacity
        style={styles.button}
        title="Go Back"
        onPress={() => navigation.goBack("Go Back")}
      >
        <Text>Go Back</Text>
      </TouchableOpacity>
    </SearchContainer>
  );
};

const HomeContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Home = ({ navigation }) => {
  return (
    
    <HomeContainer>
      <Text style={{ fontWeight: "bold", fontSize: 48 }}>Welcome to,</Text>
      <Text style={{ fontWeight: "bold", fontSize: 48 }}>Travtail</Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton
          icon="account-circle"
          color={Colors.blue500}
          size={20}
          onPress={() => navigation.navigate("Profile", { name: "Profile" })}
        />
        <IconButton
          icon="folder-account"
          color={Colors.red500}
          size={20}
          onPress={() => navigation.navigate("Details", { name: "Details" })}
        />
        <IconButton
          icon="magnify"
          color={Colors.red500}
          size={20}
          onPress={() => navigation.navigate("Search", { name: "Search" })}
        />
      </View>
    </HomeContainer>
  );
};
