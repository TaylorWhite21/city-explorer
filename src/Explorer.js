import React from 'react';
import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button'
import axios from 'axios';

class Explorer extends React.Component {
  //Constructor for initial values
  constructor(props){
    super(props)
    this.state = {
      city:'',
      lat: 0,
      lon: 0,
      mapImage: '',
      displayResults: false,
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
    let cityResults = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`)
    console.log(cityResults.data[0]);
    this.setState ({
      displayResults: true,
      city: cityResults.data[0].display_name,
      lat: cityResults.data[0].lat,
      lon: cityResults.data[0].lon,
      mapImage: cityResults.data[0].icon,
    })
    console.log('i am here:', this.state);
  }

  render () {
 

    return (
      <>
      <h1>Welcome to City Explorer!</h1>
      <Form.Group onChange={this.handleOnChange}>
      <Form.Control size="lg" type="text" placeholder="Enter City Name Here" />
      <Button onClick={this.getCityResults} variant="primary" size="lg" active> 
      EXPLORE!
      </Button>
      </Form.Group>

      {this.state.displayResults ? <h4>Lat: {this.state.lat}, Long: {this.state.lon}</h4> : ''}

      
      </>
    )
  }
}

export default Explorer;
