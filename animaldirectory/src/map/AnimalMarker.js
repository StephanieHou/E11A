import React from "react";
import "./AnimalMarker.css";

const AnimalMarker = ({ animal, image, onAnimalClick, selected }) => (
  <img
    className={selected ? "rat selected" : "rat"}
    alt=""
    src={image}
    onClick={() => onAnimalClick(animal)}
  />
);

export default AnimalMarker;