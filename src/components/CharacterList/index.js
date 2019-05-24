import React from 'react';
import PropTypes from 'prop-types';

class CharacterList extends React.Component{

    render(){
        const {characters} = this.props;
        return(
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

CharacterList.propTypes = {
  characters : PropTypes.arrayOf(PropTypes.object)
}


export default CharacterList;