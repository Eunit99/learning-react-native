import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from "./../styles/styles";
import { useFonts } from "expo-font";



export default function HomeScreen() {



  const [loaded] = useFonts({
    Murasuit: require('../assets/fonts/Murasuit.ttf'),
    InikaBold: require('../assets/fonts/Inika-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>

        <View style={styles.header}>
          <View>
            <Text style={
              [styles.headerTitle,
              { fontFamily: "InikaBold" }
              ]
            }>
              Welcome, Tabitha
            </Text>
          </View>

          <Image
            style={styles.headerIconContainer}
            source={require('../assets/wallet-icon.svg')}
          />
        </View>

        <View style={styles.balanceContainer}>
          <Text style={
            [styles.balanceContainerBalance,
            { fontFamily: "Murasuit" }
            ]
          }>
            ₦ 25,000
          </Text>

          <View style={styles.balanceContainerButtonContainer}>
            <View style={styles.balanceContainerButton}>
              <Text style={
                [styles.balanceContainerButtonText,
                { fontFamily: "Murasuit" }
                ]
              }>
                Add money
              </Text>
            </View>

            <View style={styles.balanceContainerButton}>
              <Text style={
                [styles.balanceContainerButtonText,
                { fontFamily: "Murasuit" }
                ]
              }>
                View history
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomNavigation}>
          <View style={styles.nav}>
            <Image
              style={styles.headerIconContainer}
              source={require('../assets/send-icon.svg')}
            />
            <Text style={
              [styles.text,
              { fontFamily: "Murasuit" }
              ]
            }>
              Send money
            </Text>
          </View>

          <View style={styles.nav}>
            <Image
              style={styles.headerIconContainer}
              source={require('../assets/card-icon.svg')}
            />
            <Text style={
              [styles.text,
              { fontFamily: "Murasuit" }
              ]
            }>
              View cards
            </Text>
          </View>

          <View style={styles.nav}>
            <Image
              style={styles.headerIconContainer}
              source={require('../assets/profile-icon.svg')}
            />
            <Text style={
              [styles.text,
              { fontFamily: "Murasuit" }
              ]
            }>
              Profile
            </Text>
          </View>

        </View>
      </View>
    </>
  )
}