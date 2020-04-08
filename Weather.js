import React from "react"
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const weatherOptions = {
    Haze: {
        iconName:"weather-windy",
        bg: ["#6f6f90", "#758eb7"]
    },
    Clouds: {
        iconName:"weather-cloudy",
        bg: ["#7facd6", "#bfb8da"]
    },
    Thunderstorm: {
        iconName:"weather-lightning",
        bg: ["#4c669f", "#192f6a"]
    },
    Rain: {
        iconName:"weather-rainy",
        bg: ["#7c8cbf", "#bac94a"]
    },
    Snow: {
        iconName:"weather-snowy",
        bg: ["#47cacc", "#63bcc9"]
    },
    Clear: {
        iconName:"weather-sunny",
        bg: ["#f8d90f", "#fe7a15"]
    },
    Mist: {
        iconName:"weather-fog",
        bg: ["#428cd4", "#ff9cda"]
    }
}

export default function Weather({temp, condition, city}) {
    return (
    <LinearGradient colors={weatherOptions[condition].bg} style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={86} color="white"></MaterialCommunityIcons>
            <Text style={styles.temp}>{temp}°</Text>
            
        </View>
        <View style={styles.halfContainer}>
            <Text style={styles.details}>{condition}</Text>
            <Text style={styles.details}>{city} </Text>
            <Text>test</Text>
        </View>
    </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Clear", "Clouds", "Haze", "Mist"]).isRequired,
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
    details: {
        fontSize: 20,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});