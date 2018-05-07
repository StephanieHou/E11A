import React from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import animalImageXS from "../animal_images/animalMarker2.png";
import animalImageS from "../animal_images/animalMarker2.png";
import animalImageM from "../animal_images/animalMarker2.png";
import AnimalMarker from "./AnimalMarker";

const defaultOptions = {
  defaultCenter: { lat: 40.7128, lng: -73.9 },
  defaultZoom: 12
};

class Map extends React.Component {
  state = {
    mapOptions: defaultOptions,
    animals: [],
    selectedId: null
  };

  shouldComponentUpdate(nextProps, nextState) {
    // Since this component does not depend on props, we only rerender when state changes
    // So we avoid unneeded renders when parent (App) component rerenders
    return this.state !== nextState;
  }

  componentDidMount() {
    axios
      .get(
        "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?" +
          "&$where=complaint_type='Animal Abuse'&$limit=200&$order=created_date DESC"
      )
      .then(res => {
        this.setState({
          animals: res.data.filter(animal => animal.location && animal.location.coordinates)
        });
      })
      .catch(err => {
        console.log("error fetching rats");
      });
  }

  onMapChange = options => {
    this.setState({
      mapOptions: options
    });
  };

  onAnimalClick = animal => {
    console.log("clicked on: ", animal);
    this.props.onAnimalClick(animal);
    this.setState({ selectedId: animal.unique_key });
  };

  render() {
    const { animals, mapOptions, selectedId } = this.state;
    const { zoom } = mapOptions;

    const image = zoom >= 16 ? animalImageM : zoom >= 14 ? animalImageS : animalImageXS;

    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyC3inJHTep0Aa7Bi5PmzP0nxvrmPlMYDN8"
        }}
        options={this.createMapOptions}
        onChange={this.onMapChange}
        {...defaultOptions}
        {...mapOptions}
      >
        {animals.map(animal => (
          <AnimalMarker
            animal={animal}
            image={image}
            selected={animal.unique_key === selectedId}
            onAnimalClick={this.onAnimalClick}
            key={animal.unique_key}
            lat={animal.location.coordinates[1]}
            lng={animal.location.coordinates[0]}
          />
        ))}
      </GoogleMapReact>
    );
  }
}

export default Map;