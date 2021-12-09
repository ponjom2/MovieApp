import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import ClassComponent from './src/ClassComponent';
import FunctionComponent from './src/FunctionComponent';

export default function App() {

  return (
    <SafeAreaView style={main.container} >
      {/* <ClassComponent /> */}
      <FunctionComponent />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});