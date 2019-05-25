import React from 'react';
import PropTypes from 'prop-types'


const CharacterDetail = props => {
    const { characters } = props;
    const { name, id, image, house, dob, patronus, alive } = characters[2];
    const isAlive = alive ? 'alive' : 'dead'
    return (
        <div data-id={id}>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>{house}</p>
            <p>{dob}</p>
            <p>{patronus}</p>
            <p>{isAlive}</p>
        </div>
    )

}

CharacterDetail.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object),
}

export default CharacterDetail;


