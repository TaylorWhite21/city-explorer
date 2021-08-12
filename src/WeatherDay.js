import React from 'react';
import Card from 'react-bootstrap/Card'


class WeatherDay extends React.Component {
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
                {this.props.city.date}
              </Card.Text>
            </Card.Body>
          </Card>
        )
        }
      </>
    )
  }
}

export default WeatherDay;
