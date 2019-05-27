import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import queryApi from '../../services/characters-service';

import CharacterList from '../CharacterList';
import Filter from '../Filter';
import './styles.scss';
import CharacterDetail from '../CharacterDetail';

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
        <Fragment>


          <Switch>
            <Route
              exact path="/"
              render={() => (
             
                  <div className="page--characters">
                  <header>
                    <h1 className="main__title">Harry Potter Characters</h1>
                  </header>
                  <main>
                    <Filter
                      handleChange={this.handleChange}
                      value={filter}
                    />
                    <CharacterList
                      characters={filteredCharacters}
                    />
                  </main>
                  </div>
              )}
            />
            <Route
              path="/character/:name"
              render={(routerProps) => (
                <CharacterDetail match={routerProps.match} characters={characters} />
              )}
            />
          </Switch>

        </Fragment>

      );
    }
  }
}

export default App;
