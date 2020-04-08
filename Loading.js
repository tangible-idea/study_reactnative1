import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
          <ActivityIndicator size="large" color="#333333" style={styles.spinner} />
            <Text>Open up App.js to start working on your app!</Text>
            <Text style={styles.text}>Getting the fucking weather</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-end",
      paddingHorizontal: 30,
      paddingVertical: 100,
      backgroundColor: "#FDF6AA"
    },
    text: {
      color: "#2c2c2c",
      fontSize:30 
    },
    spinner: {
      justifyContent: "center",
      alignItems: "center",
      padding: 100
    }
  });
  