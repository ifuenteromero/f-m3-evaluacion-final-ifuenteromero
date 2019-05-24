import React, { Fragment } from 'react';

import CharacterList from '../CharacterList';
import Filter from '../Filter';
import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filter : ""
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
            }
          });
          return {
            characters: newData
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
    const filteredCharacters = characters.filter(character => character.name.includes(filter));
    return (
      <Fragment>
        <header>
          <h1>Harry Potter Characters</h1>
        </header>
        <main>
          <Filter handleChange = {this.handleChange} value = {filter}/>
          <CharacterList characters={filteredCharacters} />
        </main>
      </Fragment>
    );
  }
}

export default App;
