import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherConditions';

const Weather = ({ weather, temperature, feelsLike }) => {
  if (weather != null) {
    return (
      <View
        style={[
          styles.weatherContainer, {Image: weatherConditions[weather].image},
          { backgroundColor: weatherConditions[weather].color}
        ]}
      >
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons size={72} name={weatherConditions[weather].icon} color={'#fff'} />
          <Text style={styles.tempText}>{temperature}˚C</Text>
        
        </View>
        <Text style={styles.childText}>{'\n'}Feels Like {feelsLike}˚C</Text>
        <View style={styles.bodyContainer}>
       
          <Text style={styles.title}>{weatherConditions[weather].title}</Text>
          
          <Text style={styles.subtitle}>{weatherConditions[weather].subtitle}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Oh no, something went wrong</Text>
      </View>
    )
  }
};
Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
}
const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  childText: {
    fontSize: 15,
    color: '#ddd5ed',
    alignItems: 'center',
    marginTop: -80,
   paddingLeft: 250,
    // paddingRight: 45,
    // marginBottom: 150,
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 45,
    paddingRight: 45,
    marginBottom: 150,
    width: 415
  },
  title: {
    fontSize: 50,
    color: '#fff'
  },
  subtitle: {
    fontSize: 25,
    color: '#fff'
  }
});

export default Weather;