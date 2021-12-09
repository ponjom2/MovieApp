import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import ClassComponent from './src/ClassComponent';
import FunctionComponent from './src/FunctionComponent';
import style from './src/Styles'

export default function App() {
  return (
    <SafeAreaView style={style.container} >
      <View style={style.section}>
        <Text style={style.header}>TOP MOVIES OF ALL TIME</Text>
        <ClassComponent />
        <FunctionComponent />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  )
}
