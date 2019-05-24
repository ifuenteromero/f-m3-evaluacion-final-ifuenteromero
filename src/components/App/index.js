import React from 'react';

import CharacterList from '../CharacterList';
import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
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

  render() {
    const { characters } = this.state;

    return (
      <React.Fragment>
        <header>
          <h1>Harry Potter Characters</h1>
        </header>
        <main>
          <CharacterList characters={characters} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
