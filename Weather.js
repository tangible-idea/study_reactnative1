import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({temp, condition, city}) {
    return (
    <View style={styles.container}>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons name="cloud" size={86}></MaterialCommunityIcons>
            <Text style={styles.temp}>{temp}°</Text>
            <Text>{condition}</Text>
            <Text>{city}</Text>
        </View>
        <View style={styles.halfContainer}></View>
    </View>
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
        fontSize: 36
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});