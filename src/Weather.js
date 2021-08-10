import React from 'react';
import './Weather.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDay from './WeatherDay.js'

class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showWeather: this.state.weatherData
    }
  }

  render() {

    return (
      <WeatherDay />
    )
  }
}

export default Weather;
