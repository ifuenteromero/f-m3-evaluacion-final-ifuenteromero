import React, { Fragment } from 'react';
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
      life: 'alive',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeLife = this.handleChangeLife.bind(this);
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

  handleChangeLife(event){
    this.setState({
      life: event.target.value
    })
  }

  render() {
    const { characters, filter, isFetching } = this.state;
    const filteredLife = characters.filter(character=>{
      let aliveFilter ;
      this.state.life ==='alive' ? aliveFilter = true : aliveFilter = false;
      
      return character.alive === aliveFilter

    })
   
     const filteredCharacters = filteredLife.filter(character => character.name.toUpperCase().includes(filter.toUpperCase()));
    if (isFetching) { return (<p>loading</p>) }
    else {
      return (
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <Fragment>
                <div>
                  <input
                  type="radio"
                  value = "alive"
                  name = "life"
                  id="alive"
                  onChange={this.handleChangeLife}
                  checked = {this.state.life==='alive'}
                  />
                  <label htmlFor="alive">
                    alive
                  </label>

                </div>
                <div>
                  <input
                  type="radio"
                  value = "dead"
                  name = "life"
                  id="dead"
                  checked = {this.state.life==='dead'}
                  onChange={this.handleChangeLife}
                  />
                  <label htmlFor="dead">
                    dead
                  </label>

                </div>
                <Home filter={filter} handleChange={this.handleChange}
                  filteredCharacters={filteredCharacters} />
              </Fragment>
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
