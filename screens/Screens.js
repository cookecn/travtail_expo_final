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

//Styles for All Screens
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeContainer: {
    flex: 1,
  },
  searchContainer: {
    flex: 1,
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
        <ProfileContainer>
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
        </ProfileContainer>
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
      <Text style={styles.baseText}>Search</Text>
        <Text>Home</Text>
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
