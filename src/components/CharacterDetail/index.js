import React from 'react';
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types'


const CharacterDetail = props => {
    const { characters,match } = props;
    const routerId = match.params.id;
    const index = routerId-1;
    const { name, id, image, house, dob, patronus, alive } = characters[index];
    const isAlive = alive ? 'alive' : 'dead'
    return (
        <div data-id={id}>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>{house}</p>
            <p>{dob}</p>
            <p>{patronus}</p>
            <p>{isAlive}</p>
            <Link to ="/">Volver</Link>

        </div>
    )

}

CharacterDetail.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object),
}

export default CharacterDetail;


