import React, { Fragment } from 'react';

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
      isFetching :true,

    }
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    this.getData();
  }
 
  getData() {
    queryApi().then(data =>
      this.setState(() => {
        const dataCleaned = data.map((character, index) => {
          return {
            id: character.index+1,
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
          isFetching : false
        }
      }))
  }


  handleChange(event) {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    const { characters, filter } = this.state;
   const filteredCharacters = characters.filter(character => character.name.toUpperCase().includes(filter.toUpperCase()));
    return (
      <Fragment>
        <header>
          <h1>Harry Potter Characters</h1>
        </header>
        <main>
          <Filter handleChange={this.handleChange} value={filter} />
          <CharacterDetail characters={characters} />
          <CharacterList characters={filteredCharacters} />

        </main>
      </Fragment>
    );
  }
}

export default App;
