import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard';
import './styles.scss';

const CharacterList = props => {
  const { characters } = props;
  return (
    <ul className="list__container">{
      characters.map(character =>
        <li className="list__element" key={character.id} >
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