import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';








export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    </>
  );
}
