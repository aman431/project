import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button,Image } from 'native-base';
import TabScreen from './components/Tabs/TabScreen.js';
export default function App() {
  return (
    <>
      <TabScreen />
    </>
  )
}
