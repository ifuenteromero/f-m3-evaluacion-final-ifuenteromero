import React from 'react';
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
      <ul>{
        characters.map(character =>
          <li key={character.id} >
            <img src={character.image} alt={character.name} />
            <h1> {character.name}</h1>
            <p>{character.house}</p>
          </li>
        )}
      </ul>
    );
  }
}

export default App;
