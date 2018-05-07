import React from "react";
import axios from "axios";
import { Route, Link, Switch } from 'react-router-dom';
import './Home.css';
import Map from './map/Map'
import logo from "./animal_images/logo.png";
import AnimalInfo from "./AnimalInfo";

class Home extends React.Component {
  state = { input: "" , selected: null,};

  handleSearchChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  onAnimalClick = animal => {
    this.setState({ selected: animal });
  };
  
  render() {
    const { input,selected } = this.state;
    return (
      <div>
        <div id="topbar">
          <img id="logo" src={logo} />
          <div>
            <a id="service" href="https://www.aspca.org/nyc" title="Services">
             <p>Services</p>
            </a>
            <div id="res">
              <Link to={`/resources`}><p> Resources</p></Link>
            </div>
          </div>
        </div>
        <div id="sidebar">
          <div id="inner">
            <form onSubmit={this.submitForm}>
              <label>
                Search: {" "}
                <input
                  type="text"
                  name="username"
                  value={input}
                  onChange={this.handleSearchChange}
                />
              </label>
              <button type="submit" value="Submit"> <img src="https://png.icons8.com/metro/1600/search.png" /></button>
            </form>
          </div>
          <div>
            <div id='infodiv'>
              <h3>About Us</h3>
              <p>From information received from 311 service calls, we provide a cohensive map of animal abuse cases in New York City.
                We strive to help animal lovers and organizations by giving information that they may need.  </p>
            </div>
            <div id='datadiv'>
              <div>
                {selected ? AnimalInfo(selected) : <strong> Choose a point for more information </strong>}
              </div>
            </div>
          </div>
        </div>
        <div id="map-container">
          <Map onAnimalClick={this.onAnimalClick}/>
        </div>
      </div>
    );
  }
}

export default Home;