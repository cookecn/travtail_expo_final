import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Divider,
  Card,
  Title,
  Paragraph,
  IconButton,
  Colors,
  DataTable,
  Avatar,
  Button,
} from "react-native-paper";
import SearchBarComponent from "../components/SearchBar";
import LogoComponent from "../components/Logo";
import BarChartComponent from "../components/BarChart";
import HeroComponent from "../components/Hero";
//import Pie from "react-native-pie";

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
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 5,
    color: "white",
    marginTop: 20,
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
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "indigo",
          }}
        >
          <Text style={styles.weeklyEarningsText}>Weekly Earnings</Text>
        </View>
        <BarChartComponent />
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
              <DataTable.Cell>Jul 16 - 22</DataTable.Cell>
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
              <DataTable.Cell>Jul 7 - 15</DataTable.Cell>
              <DataTable.Cell numeric>$612.00</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Jun 30 - Jul 6</DataTable.Cell>
              <DataTable.Cell numeric>$385.00</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      </ScrollView>
    </SafeAreaView>
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
          <Card style={{ backgroundColor: "indigo" }}>
            <Card.Content
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Title style={{ fontSize: 48, padding: 40, color: "white" }}>
                $585.00
              </Title>
            </Card.Content>
          </Card>

          <Divider />

          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Weekly Summary</DataTable.Title>
              <DataTable.Title numeric>Value</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>Plumbing</DataTable.Cell>
              <DataTable.Cell numeric>$105.00</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Personal Helper</DataTable.Cell>
              <DataTable.Cell numeric>$75.00</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Handyman Services</DataTable.Cell>
              <DataTable.Cell numeric>$96.00</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Appliance Repair</DataTable.Cell>
              <DataTable.Cell numeric>$200.00</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Cleaning Services</DataTable.Cell>
              <DataTable.Cell numeric>$45.00</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Delivery Services</DataTable.Cell>
              <DataTable.Cell numeric>$64.00</DataTable.Cell>
            </DataTable.Row>
          </DataTable>

          <View>
            <ImageBackground
              source={require("../img/work.jpg")}
              style={{ flex: 1, padding: 50 }}
            >
              <DoubleCardContainer>
                <Card
                  style={{
                    margin: 10,
                    width: "45%",
                    backgroundColor: "rgba(52, 52, 52, 0.9)",
                  }}
                >
                  <Card.Content
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Title style={{ color: "white" }}>24 Hours</Title>
                    <Paragraph style={{ color: "white" }}>
                      Jul 16 - 22
                    </Paragraph>
                  </Card.Content>
                </Card>
                <Card
                  style={{
                    margin: 10,
                    width: "45%",
                    backgroundColor: "rgba(52, 52, 52, 0.9)",
                  }}
                >
                  <Card.Content
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Title style={{ color: "white" }}>44 Hours</Title>
                    <Paragraph style={{ color: "white" }}>Jul 9 - 15</Paragraph>
                  </Card.Content>
                </Card>
              </DoubleCardContainer>
            </ImageBackground>
          </View>

          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Daily Summary</DataTable.Title>
              <DataTable.Title numeric>Activity</DataTable.Title>
              <DataTable.Title numeric>Value</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>Jul 22</DataTable.Cell>
              <DataTable.Cell numeric>Plumbing</DataTable.Cell>
              <DataTable.Cell numeric>$105.00</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Jul 21</DataTable.Cell>
              <DataTable.Cell numeric>Appliance</DataTable.Cell>
              <DataTable.Cell numeric>$115.00</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Jul 20</DataTable.Cell>
              <DataTable.Cell numeric>Delivery</DataTable.Cell>
              <DataTable.Cell numeric>$64.00</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Jul 19</DataTable.Cell>
              <DataTable.Cell numeric>Cleaning</DataTable.Cell>
              <DataTable.Cell numeric>$45.00</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Jul 18</DataTable.Cell>
              <DataTable.Cell numeric>Appliance</DataTable.Cell>
              <DataTable.Cell numeric>$85.00</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Jul 17</DataTable.Cell>
              <DataTable.Cell numeric>Handyman</DataTable.Cell>
              <DataTable.Cell numeric>$96.00</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Jul 16</DataTable.Cell>
              <DataTable.Cell numeric>Personal</DataTable.Cell>
              <DataTable.Cell numeric>$75.00</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
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
      <LogoComponent />
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
        {/*<IconButton
          icon="magnify"
          color={Colors.red500}
          size={20}
          onPress={() => navigation.navigate("Search", { name: "Search" })}
        />*/}
      </View>
      <SearchBarComponent />
    </HomeContainer>
  );
};

/*
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
</List.Section>*/
