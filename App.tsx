import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
const walletIcon = require('./assets/wallet-icon.svg');



export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <View style={styles.container}>

          <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>
                Welcome, Tabitha
              </Text>
            </View>

            <Image
              style={styles.headerIconContainer}
              source={require(`${walletIcon}`)}
            />
          </View>

          <View style={styles.balanceContainer}>
            <Text style={styles.balanceContainerBalance}>
              ₦ 25,000
            </Text>

            <View style={styles.balanceContainerButtonContainer}>
              <View style={styles.balanceContainerButtonContainer}>
                Add money
              </View>

              <View style={styles.balanceContainerButton}>
                View history
              </View>
            </View>
          </View>

          <View style={styles.bottomNavigation}>
            <View style={styles.nav}>
              <Text style={styles.text}>
                Send money
              </Text>
            </View>

            <View style={styles.nav}>
              <Text style={styles.text}>
                View cards
              </Text>
            </View>

            <View style={styles.nav}>
              <Text style={styles.text}>
                Profile
              </Text>
            </View>

          </View>
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#222A48',
    height: "100vh",
    width: "100vw"
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "1rem",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
  },

  headerIconContainer: {
    width: "34px",
    height: "34px",
    position: "relative",
  },

  balanceContainer: {
    width: "90%",
    height: "190px",
    marginTop: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#D7E8EF",
    borderRadius: 16,
    padding: "1rem",
    display: "flex",
    justifyContent: "space-around",
  },

  balanceContainerButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  balanceContainerButton: {
    width: "138px",
    height: "49px",
    background: "#539BF0",
    borderRadius: 14,
    color: "#fff",
    fontWeight: "700",
    fontSize: "17px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },


  bottomNavigation: {
    position: "absolute",
    width: "100%",
    height: "80px",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "12px",
  },

  nav: {
    height: "100%",
    width: "50px",
  },

  balanceContainerBalance: {
    fontFamily: "InaiMathi",
    fontWeight: "700",
    fontSize: 24,
    color: "#000000",
  },

  text: {
    fontFamily: "InaiMathi",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 13,
    color: "#000000",
  }
});
