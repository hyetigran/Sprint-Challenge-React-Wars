import React, { Component } from 'react';
import CharacterBanner from './components/CharacterBanner';
import CharacterStats from './components/CharacterStats';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
          { this.state.starwarsChars.map((character, index) => (
            <div className="CharacterWrapper">
            <CharacterBanner
              key={index}
              character={character.name}
              />
            <CharacterStats
              key={index}
              birthYear={character.birth_year}
              eyeColor={character.eye_color}
              height={character.heigth}
              homeworld={character.homeworld}


              />
            </div>
          ))
          }
        
      </div>
    )
  }
}

export default App;
