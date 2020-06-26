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
import { LinearGradient } from "expo-linear-gradient";
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
    fontSize: 36,
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
  heroHeaderStyle: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
  heroHeaderWeekly: {
    height: 188,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyleWeekly: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
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
            <Text style={styles.textStyle}>Historical Earnings</Text>
          </LinearGradient>
        </ImageBackground>

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
              <DataTable.Cell>Current</DataTable.Cell>
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
        <ImageBackground
          source={require("../img/croppedworker.jpg")}
          style={styles.heroHeaderWeekly}
          resizeMode="contain"
        >
          <LinearGradient
            colors={["rgba(98,29,235,0.3)", "rgba(98,29,235,0.3)"]}
            style={{
              justifyContent: "center",
              alignItems: "center",
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 188,
            }}
          >
            <Text style={styles.textStyleWeekly}>$585.00</Text>
          </LinearGradient>
        </ImageBackground>
        <DetailsContainer>
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
              style={{ flex: 1, padding: 50, height: 200 }}
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
                  height: 200,
                }}
              >
                <DoubleCardContainer>
                  <Card
                    style={{
                      margin: 10,
                      width: "45%",
                      backgroundColor: "rgba(98, 40, 212, 0.6)",
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
                      backgroundColor: "rgba(98, 40, 212, 0.6)",
                    }}
                  >
                    <Card.Content
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Title style={{ color: "white" }}>44 Hours</Title>
                      <Paragraph style={{ color: "white" }}>
                        Jul 9 - 15
                      </Paragraph>
                    </Card.Content>
                  </Card>
                </DoubleCardContainer>
              </LinearGradient>
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
      <View style={{ marginTop: 10 }}></View>
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
