import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import walletIcon from './assets/wallet-Icon.svg';



export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <View style={styles.container}>

          <View style={styles.header}>
            <View>
              <Text style={styles.header.title}>
                Welcome, Tabitha W
              </Text>
            </View>

            <Image
              style={styles.header.iconContainer}
              source={require(`${walletIcon}`)}
            />
          </View>

          <View style={styles.balanceContainer}>
            <View style={styles.balanceContainer.balance}>
              ₦ 25,000
            </View>

            <View style={styles.balanceContainer.buttonContainer}>
              <View style={styles.balanceContainer.buttonContainer.button}>
                Add money
              </View>

              <View style={styles.balanceContainer.buttonContainer.button}>
                View history
              </View>
            </View>
          </View>

          <View style={styles.bottomNavigation}>
            <View style={styles.bottomNavigation.nav}>
              <Text style={styles.bottomNavigation.nav.text}>
                Send money
              </Text>
            </View>

            <View style={styles.bottomNavigation.nav}>
              <Text style={styles.bottomNavigation.nav.text}>
                View cards
              </Text>
            </View>

            <View style={styles.bottomNavigation.nav}>
              <Text style={styles.bottomNavigation.nav.text}>
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

    title: {
      color: "#fff",
      fontSize: "20px"
    },

    iconContainer: {
      width: "34px",
      height: "34px",
      position: "relative",
    }
  },

  balanceContainer: {
    width: "90%",
    height: "190px",
    marginTop: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#D7E8EF",
    borderRadius: "16px",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-around",


    balance: {
      fontFamily: "InaiMathi",
      fonStyle: "normal",
      fontWeight: "700",
      fontSize: "24px",
      color: "#000000",
    },

    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",

      button: {
        width: "138px",
        height: "49px",
        background: "#539BF0",
        borderRadius: "14px",
        color: "#fff",
        fontWeight: "700",
        fontSize: "17px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }
    },

  },

  bottomNavigation: {
    position: "absolute",
    width: "100%",
    height: "80px",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "#FFFFFF",
    borderRadius: "17px",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "12px",

    nav: {
      height: "100%",
      width: "50px",

      text: {
        fontFamily: "InaiMathi",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "13px",
        color: "#000000",
        whiteSpace: "nowrap",
      }
    }
  },


});
