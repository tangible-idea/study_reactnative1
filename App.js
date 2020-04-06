import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";

//http://api.openweathermap.org/data/2.5/weather?lat=37.4108644&lon=127.1321343&appid=dbea8043be16362ecbbb027a5797e11b
const API_KEY= "dbea8043be16362ecbbb027a5797e11b";
export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather= async(latitude, longitude) => {
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(data);
  };
  getLocation= async() => {
    try {

      const response= await Location.requestPermissionsAsync();
      console.log(response);      
      
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);

      this.getWeather(latitude, longitude);
      this.setState({ isLoading:false});

    } catch (error) {
      Alert.alert("Can't find you.", error);
    }
  }
  
  // mount:
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading/> : null;
  }
};