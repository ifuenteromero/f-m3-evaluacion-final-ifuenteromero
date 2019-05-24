import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard';

const CharacterList = props => {
  const { characters } = props;
  return (
    <ul>{
      characters.map(character =>
        <li key={character.id} >
          <CharacterCard character={character} />
        </li>
      )}
    </ul>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default CharacterList;