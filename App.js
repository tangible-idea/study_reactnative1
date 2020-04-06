import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from './Weather';

//http://api.openweathermap.org/data/2.5/weather?lat=37.4108644&lon=127.1321343&appid=dbea8043be16362ecbbb027a5797e11b
const API_KEY= "dbea8043be16362ecbbb027a5797e11b";
export default class extends React.Component {
  state = {
    isLoading: true,
    temp1: 0
  }

  getWeather= async(latitude, longitude) => {
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(`===== temp1: ${data.main.temp}`);
    this.setState({isLoading:false, temp1: data.main.temp});
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
      //this.setState({ isLoading:false});

    } catch (error) {
      Alert.alert("Can't find you.", error);
    }
  }
  
  // mount:
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp1 } = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp1)}/>;
    //return <Loading/>;
  }
};