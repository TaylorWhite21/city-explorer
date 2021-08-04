import React from 'react';

class Weather extends React.Component {
  render(){
    constructor(props){
      super(props);
      this.state={
        
      }
    }

    return(
      this.props.weatherData.map((city, idx) => <h2 key={idx}>{city.date}</h2>)
    )
  }
}

export default Weather;
