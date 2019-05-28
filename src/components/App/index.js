import React from 'react';
import { Switch, Route,Link } from 'react-router-dom';

import queryApi from '../../services/characters-service';

import Home from '../Home';
import CharacterDetail from '../CharacterDetail';


import './styles.scss';
import CharacterList from '../CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],

      isFetching: true,
      filters: {
        filterName: "",
        filterLife: true,
        filterHome :["Gryffindor","Slytherin","Ravenclaw","Hufflepuff"]
      }

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeLife = this.handleChangeLife.bind(this);
    this.handleReset=this.handleReset.bind(this);
    this.handleChangeHome=this.handleChangeHome.bind(this);
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
            house: character.house||'Homeless',
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

  handleChangeHome(event){
    const currentValue = event.currentTarget.value;
    console.log(currentValue);
    this.setState(prevState=>{
      const currentArray = prevState.filters.filterHome;
         
      return{
        filters : {
          ...prevState.filters,
          filterHome : currentArray.includes(currentValue)?currentArray.filter(item=>item!==currentValue) : currentArray.concat(currentValue)
        }
      }
    
    }) 
  
  }
  handleReset(){
    this.setState({
      filters: {
        filterName: "",
        filterLife: true,
        filterHome :["Gryffindor","Slytherin","Ravenclaw","Hufflepuff"]
      }
    })
  }

  render() {
    const { characters, filters, isFetching } = this.state;
    const filteredCharHome = characters.filter(
      character => filters.filterHome.includes(character.house)
    );
    const filteredGryf = characters.filter(
      character => character.house ==="Gryffindor"
          );
    const filteredCharLife = filteredCharHome.filter(
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
                handleChangeHome={this.handleChangeHome}
                filterHome = {filters.filterHome}

              />

            )}
          />
          <Route 
          path ="/Gryffindor"
          render = {
            ()=>(
              <React.Fragment>
              <CharacterList  characters={filteredGryf}  />
              <Link to="/"> >Back </Link>
              </React.Fragment>
            )
          }
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
