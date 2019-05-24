import React,{Fragment} from 'react';

import CharacterList from '../CharacterList';
import './styles.scss';
import queryApi from '../../services/characters-service';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      isFetching : true
    }
  }


  componentDidMount() {
    this.getData();
  }

  getData() {
      queryApi().then(data => {
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
            characters: newData,
            isFetching : false
          }
        }
        )
      })
  }

  render() {
    const { characters } = this.state;
    const { isFetching } = this.state;

    return (
      <Fragment>
        <header>
          <h1>Harry Potter Characters</h1>
        </header>
        <main>
          { isFetching ? (<p>holi</p>) :( <CharacterList characters={characters} />)}
         
        </main>
      </Fragment>
    );
  }
}

export default App;
