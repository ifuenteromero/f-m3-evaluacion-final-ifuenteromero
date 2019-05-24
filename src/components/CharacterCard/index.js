import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = props => {
    const { name, image, house } = props.character;
    return (
        <div>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>{house}</p>
        </div>
    );
}

CharacterCard.propTypes = {
    character: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        house: PropTypes.string.isRequired
    })
}

export default CharacterCard;