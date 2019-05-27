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
        filterName : "",
        filterLife : true
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
      filterName: event.target.value
    })
  }
  handleChangeLife(event){
    const nextFilterLife = event.currentTarget.value ==="true";
    this.setState( prevState =>{
   
      return{
        filters :{
          ...prevState.filters,
          filterLife : nextFilterLife
        }
      }

    }
      
    //   {
    //   filterLife:event.currentTarget.value==="true"
    // }
    
    
    )
  }

  render() {
    const { characters, filter, isFetching } = this.state;
    const filteredCharLife = characters.filter(
      character =>character.alive === this.state.filters.filterLife
    )
  
    //  const filteredCharacters = filteredCharLife.filter(character => character.name.toUpperCase().includes(filter.toUpperCase()));
    if (isFetching) { return (<p>loading</p>) }
    else {
      return (
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <Home
                filter={filter}
                handleChange={this.handleChange}
                filteredCharacters={filteredCharLife}
                handleChangeLife={this.handleChangeLife}
                filterLife={this.state.filters.filterLife}
               
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
