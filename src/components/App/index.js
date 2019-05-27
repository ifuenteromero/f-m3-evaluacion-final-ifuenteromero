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

      isFetching: true,
      filters: {
        filterName: "",
        filterLife: true
      }

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeLife = this.handleChangeLife.bind(this);
    this.handleReset=this.handleReset.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
    console.log('el componente se ha montado');
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
    const nameInputValue = event.currentTarget.value;
    this.setState(prevState=>{
     
      return {
        filters :{
          ...prevState.filters,
          filterName : nameInputValue
        }
      }

    })
  }
  handleChangeLife(event) {
    const nextFilterLife = event.currentTarget.value === "true";
    this.setState(prevState => {

      return {
        filters: {
          ...prevState.filters,
          filterLife: nextFilterLife
        }
      }

    }

      //   {
      //   filterLife:event.currentTarget.value==="true"
      // }


    )
  }
  handleReset(){
    this.setState({
      filters: {
        filterName: "",
        filterLife: true
      }
    })
  }

  render() {
    const { characters, filters, isFetching } = this.state;
    const filteredCharLife = characters.filter(
      character => character.alive === filters.filterLife
    );
    const filteredCharacters = filteredCharLife.filter(character => character.name.toUpperCase().includes(filters.filterName.toUpperCase()));
    if (isFetching) { return (<p>loading</p>) }
    else {
      return (
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <Home
                filter={filters.filterName}
                handleChange={this.handleChange}
                filteredCharacters={filteredCharacters}
                handleChangeLife={this.handleChangeLife}
                filterLife={filters.filterLife}

              />

            )}
          />
          <Route
            path="/character/:name"
            render={(routerProps) => (
              <CharacterDetail match={routerProps.match} characters={characters} handleReset={this.handleReset} />
            )}
          />
        </Switch>
      );
    }
  }
}

export default App;
