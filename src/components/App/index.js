import React from 'react';
import { Switch, Route } from 'react-router-dom';

import queryApi from '../../services/characters-service';

import Home from '../Home';
import CharacterDetail from '../CharacterDetail';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filters:{
        filterName : "",
        filterHairColor:""
      }
     ,
      isFetching: true,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    queryApi().then(data =>
      this.setState(() => {
        const dataCleaned = data.map((character, index) => {
          return {
            id: index + 1,
            name: character.name,
            image: character.image,
            house: character.house,
            dob: character.yearOfBirth,
            patronus: character.patronus,
            alive: character.alive,
            hairColour : character.hairColour
          }
        });

        return {
          characters: dataCleaned,
          isFetching: false
        }
      }))
  }

  handleChange(event) {
    const value = event.target.value;
    const key = event.currentTarget.getAttribute('id');
    this.setState(prevState=>{
      return {
        filters :{
          ...prevState.filters,
          [key] :value
        }
      }
    })
  }

  render() {
    const { characters, filters, isFetching } = this.state;
    const filteredHairColor = characters.filter(
      character => character.hairColour.includes(filters.filterHairColor)
    );
    const filteredCharacters = filteredHairColor.filter(character => character.name.toUpperCase().includes(filters.filterName.toUpperCase()));
    if (isFetching) { return (<p>loading</p>) }
    else {
      return (
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <Home filterName={filters.filterName} handleChange={this.handleChange}
              filterHairColor = {filters.filterHairColor}
                filteredCharacters={filteredCharacters} />

            )}
          />
          <Route
            path="/character/:name"
            render={(routerProps) => (
              <CharacterDetail match={routerProps.match} characters={characters} />
            )}
          />
        </Switch>
      );
    }
  }
}

export default App;
