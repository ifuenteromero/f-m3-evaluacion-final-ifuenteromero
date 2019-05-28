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
      filters :{
        filterName : "",
        filterActor:""
      },
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
            actor : character.actor
          }
        });

        return {
          characters: dataCleaned,
          isFetching: false
        }
      }))
  }

  handleChange(event) {
    const value = event.currentTarget.value;
    const key = event.currentTarget.getAttribute('id');
    this.setState(prevState=>{
      return{
        filters :{
          ...prevState.filters,
          [key] : value
        }
      }
    })
  }

  render() {
    const { characters, filters, isFetching } = this.state;
    const filterdActors = characters.filter(
      character => character.actor.includes(filters.filterActor)
    )
    const filteredCharacters = characters.filter(character => character.name.toUpperCase().includes(filters.filterName.toUpperCase()));
    if (isFetching) { return (<p>loading</p>) }
    else {
      return (
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <Home filterName={filters.filterName} handleChange={this.handleChange}
                filteredCharacters={filterdActors}
                filterActor={filters.filterActor} />

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
