import React from "react"
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({temp, condition, city}) {
    return (
    <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]} style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons name="cloud" size={86} color="white"></MaterialCommunityIcons>
            <Text style={styles.temp}>{temp}°</Text>
            
        </View>
        <View style={styles.halfContainer}>
            <Text>{condition}</Text>
            <Text>{city}</Text>
        </View>
    </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atomsphere", "Clear", "Clouds", "Haze", "Mist"]).isRequired,
    city: PropTypes.string
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});