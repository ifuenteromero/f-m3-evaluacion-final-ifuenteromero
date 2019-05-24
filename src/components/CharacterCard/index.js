import React from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends React.Component {
    render() {
        const { name, image, house } = this.props.character;
        return (
            <div>
                <img src={image} alt={name} />
                <h1> {name}</h1>
                <p>{house}</p>
            </div>
        );
    }
}

CharacterCard.propTypes = {
    character: PropTypes.object
}

export default CharacterCard;