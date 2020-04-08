import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from './Weather';
//import AdBannerBottom from './AdBannerBottom';
//import FacebookSignIn from './FacebookSignIn';

//http://api.openweathermap.org/data/2.5/weather?lat=37.4108644&lon=127.1321343&appid=dbea8043be16362ecbbb027a5797e11b
const API_KEY= "dbea8043be16362ecbbb027a5797e11b";
export default class extends React.Component {
  state = {
    isLoading: true,
    temp: 0
  }

  // const {
  //   data: {
  //     main: {temp},
  //     weather
  //   }
  // }
  getWeather= async(latitude, longitude) => {
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    console.log(data.name);
    console.log(data.weather[0].main);
    this.setState({
      isLoading: false,
      condition: data.weather[0].main,
      temp: data.main.temp,
      city: data.name
    });
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
  
  // mount: after render()
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition, city } = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition} city={city}/>;
    //return <Loading/>;
  }
};