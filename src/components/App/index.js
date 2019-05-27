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
      filter: "",
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
            alive: character.alive
          }
        });

        return {
          characters: dataCleaned,
          isFetching: false
        }
      }))
  }

  handleChange(event) {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    const { characters, filter, isFetching } = this.state;
    const filteredCharacters = characters.filter(character => character.name.toUpperCase().includes(filter.toUpperCase()));
    if (isFetching) { return (<p>loading</p>) }
    else {
      return (
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <Home filter={filter} handleChange={this.handleChange}
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
