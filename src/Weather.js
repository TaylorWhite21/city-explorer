import React from 'react';
import Card from 'react-bootstrap/Card'
import './Weather.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <>
        {this.props.showWeather.map((city, idx) =>  
        
          <Card key={idx} className="mb-2">
            <Card.Body>
              <Card.Text>
               {city.forecast}
              </Card.Text>
            </Card.Body>
          </Card>
          )
        }
      </>
    )
  }
}

export default Weather;
