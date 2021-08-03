import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import './Explorer.css';
import axios from 'axios';

class Explorer extends React.Component {
  //Constructor for initial values
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      lat: 0,
      lon: 0,
      mapImage: '',
      displayResults: false,
      renderError: false,
      errorMessage: '',
    }
  }

  handleOnChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  // Grabs requested information from API

  getCityResults = async (e) => {
    e.preventDefault();
    // Make sure to place this in your .env file => REACT_APP_LOCATIONIQ_KEY=<YOUR KEY>
    try {
      let cityResults = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`);

      let mapResult = await axios.get(`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${cityResults.data[0].lat},${cityResults.data[0].lon}&zoom=12`);

      this.setState({
        displayResults: true,
        city: cityResults.data[0].display_name,
        lat: cityResults.data[0].lat,
        lon: cityResults.data[0].lon,
        mapImage: mapResult.config.url,
      });
    } catch (error) {
      this.setState({
        displayResults: false,
        renderError: true,
        errorMessage: `Error Occured: ${error.response.status}, ${error.response.data.error}`,
      })
    }
  }

  getWeatherResults = async (e) => {
    try {
      let weatherResults = await axios.get(`http://localhost:3001/weather?city=${this.state.city}`)
      
    } catch {

    }
  }

  render() {

    return (
      <div id="bg">
        <h1>Welcome to City Explorer!</h1>
        <h2>Please enter the city you like to explore.</h2>
        <Form.Group id="form" onChange={this.handleOnChange}>
          <Form.Control size="lg" type="text" placeholder="Enter City Name Here" />
          <Button id="submit" onClick={this.getCityResults} variant="primary">
            EXPLORE!
          </Button>
        </Form.Group>

        {this.state.displayResults ?
          <div id="results">
            <h4 id="cityName">City Name:<br></br>{this.state.city}</h4>
            <h4 id="lat">Lat: {this.state.lat}</h4>
            <h4 id="long">Long: {this.state.lon}</h4>
            <Image id="map" src={this.state.mapImage} />
          </div>
          : ''}

        {this.state.renderError ? <h3>{this.state.errorMessage}</h3> : ''}
        console.log(cityResults);
      </div>
    )
  }
}

export default Explorer;
