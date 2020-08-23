import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



import { API_KEY } from './utils/WeatherAPIKey';


import Weather from './components/Weather';


export default class App extends React.Component {
  state = {
    isLoading: false,
    temperature: 0,
    feelsLike: 0,
    weatherCondition: null,
    error: null,
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Getting weather conditions'
        })
      }
    )
  }
  fetchWeather() {
    const lat = 20.5937, lon = 78.9629
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          feelsLike: json.main.feels_like,
          weatherCondition: json.weather[0].main,
          isLoading: false,

        })
      })
  }

  fetchForcast() {
    const lat = 20.5937, lon = 78.9629
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          feelsLike: json.main.feels_like,
          weatherCondition: json.weather[0].main,
          isLoading: false,

        })
      })
  }
  render() {
    const { isLoading, weatherCondition, temperature, feelsLike, image } = this.state;
    console.log('tes', temperature)
    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingCondtainer}>
            <Text style={styles.loadingText}>Fetching the Weather</Text>
          </View>
        ) : (
            <Weather weather={weatherCondition}
              temperature={temperature}
              feelsLike={feelsLike}
            />


          )}
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
