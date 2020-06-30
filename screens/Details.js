import * as React from 'react';
import { View, SafeAreaView, ScrollView, Text, ImageBackground, StyleSheet } from 'react-native';
import { DataTable, Card, Title, Paragraph, Divider } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
    heroHeaderWeekly: {
        height: 188,
        justifyContent: "center",
        alignItems: "center",
      },
      textStyleWeekly: {
        fontSize: 48,
        fontWeight: "bold",
        color: "white",
      }
});


const DetailsContainer = ({ children }) => (
    <View style={styles.detailsContainer}>{children}</View>
  );
  const DoubleCardContainer = ({ children }) => (
    <View style={styles.doubleCardContainer}>{children}</View>
  );

  //Details Screen
//Buttons to go Home, to Search Screen, and to Go Back
const Details = () => {
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
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: 188,
              }}
            >
              <Text style={styles.textStyleWeekly}>$585.00</Text>
              <Text style={{ fontSize: 20, color: 'white'}}>Jul 15 - 21</Text>
            </LinearGradient>
          </ImageBackground>
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
                          Current Week
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
                          Previous Week
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
                <DataTable.Cell>Jul 21</DataTable.Cell>
                <DataTable.Cell numeric>Plumbing</DataTable.Cell>
                <DataTable.Cell numeric>$105.00</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Jul 20</DataTable.Cell>
                <DataTable.Cell numeric>Appliance</DataTable.Cell>
                <DataTable.Cell numeric>$115.00</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Jul 19</DataTable.Cell>
                <DataTable.Cell numeric>Delivery</DataTable.Cell>
                <DataTable.Cell numeric>$64.00</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Jul 18</DataTable.Cell>
                <DataTable.Cell numeric>Cleaning</DataTable.Cell>
                <DataTable.Cell numeric>$45.00</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Jul 17</DataTable.Cell>
                <DataTable.Cell numeric>Appliance</DataTable.Cell>
                <DataTable.Cell numeric>$85.00</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Jul 16</DataTable.Cell>
                <DataTable.Cell numeric>Handyman</DataTable.Cell>
                <DataTable.Cell numeric>$96.00</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Jul 15</DataTable.Cell>
                <DataTable.Cell numeric>Personal</DataTable.Cell>
                <DataTable.Cell numeric>$75.00</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
        </ScrollView>
      </SafeAreaView>
    );
  };

  export default Details;