import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import Titles from './Components/Titles';
import Form from "./Components/Form"
import Weather from "./Components/Weather"

const API_KEY= "a029695713205dc0cafe38c8f321a6a9"


class App extends Component {

state = {
  temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
}
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`); 
    if ( city && country)
    {
      const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
    }
  }

  render() {
    return (
      
      <div className="App">
      <img src={logo} height="80" />
       <Titles />
       <Form  getWeather={this.getWeather}/>
       <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}/>
      </div>
    );
  }
}

export default App;
