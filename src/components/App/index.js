import React, { Fragment } from 'react';

import CharacterList from '../CharacterList';
import Filter from '../Filter';
import './styles.scss';
import CharacterDetail from '../CharacterDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filter : "",
      isFetching : true,
    }
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(data => {
        this.setState(() => {
          const newData = data.map((item, index) => {
            return {
              id: index + 1,
              name: item.name,
              image: item.image,
              house: item.house,
              dob : item.yearOfBirth,
              patronus : item.patronus,
              alive : item.alive
            }
          });
          return {
            characters: newData,
            isFetching : false
          }
        }
        )
      })
  }

  handleChange(event){
    this.setState({
      filter : event.target.value
    })
  }

  render() {
    const { characters,filter } = this.state;
    const filteredCharacters = characters.filter(character => character.name.toUpperCase().includes(filter.toUpperCase()));
    return (
      <Fragment>
        <header>
          <h1>Harry Potter Characters</h1>
        </header>
        <main>
          <Filter handleChange = {this.handleChange} value = {filter}/>
          <CharacterDetail characters = {characters}  />
          <CharacterList characters={filteredCharacters} />
        
        </main>
      </Fragment>
    );
  }
}

export default App;
