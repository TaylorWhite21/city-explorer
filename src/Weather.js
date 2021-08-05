import React from 'react';

class Weather extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      
    }
  }

  render(){
    console.log('Weather.js:', this.props.showWeather[0])
    return(
    <>
      {this.props.showWeather.map((city, idx) => <h2 key={idx}>{city.date}</h2>)}
    </>
    )
  }
}

export default Weather;
