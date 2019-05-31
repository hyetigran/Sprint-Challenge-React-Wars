import React from 'react';
import "./StarWars.css";

const characterStats = ({birthYear, eyeColor, height, homeworld}) => {
  return (
    <div>
      <p>Birth Year: {birthYear}</p>
      <p>Eye Color: {eyeColor}</p>
      <p>Height: {height}</p>
    </div>

  )
}

export default characterStats;
