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
      filters :{
        filterName: "",
        filterLife : ['alive','dead']
      }
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
            alive: character.alive ? 'alive' : 'dead'
          }
        });

        return {
          characters: dataCleaned,
          isFetching: false
        }
      }))
  }

  handleChange(event) {
    const nextValue = event.target.value;
    this.setState(prevState=>{

      return{
        filters :{
          ...prevState.filters,
          filterName : nextValue
        }
      }

    })
  }

  handleChangeLife(event){
   const checkedValue = event.currentTarget.value;
  
    this.setState(prevState=>{
     const checkedLifeValues = prevState.filters.filterLife;
     let nextCheckedValues = [];

     checkedLifeValues.includes(checkedValue) ? nextCheckedValues = checkedLifeValues.filter(item=> item !== checkedValue) : nextCheckedValues = prevState.filters.filterLife.concat(checkedValue);
      
      return{
        filters :{
          ...prevState.filters,
          filterLife : nextCheckedValues
        }
      }

    })
  }

  render() {
    const { characters, filters, isFetching } = this.state;
    const { filterName,filterLife }= filters;
    const filteredLifeCharacters = characters.filter(
      character=>filterLife.includes(character.alive)

    )

     const filteredCharacters = filteredLifeCharacters.filter(character => character.name.toUpperCase().includes(filterName.toUpperCase()));
    if (isFetching) { return (<p>loading</p>) }
    else {
      return (
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <Home filter={filterName} handleChange={this.handleChange}
                filteredCharacters={filteredCharacters}
                handleChangeLife = {this.handleChangeLife}
                filterLife = {filterLife}
                />

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
