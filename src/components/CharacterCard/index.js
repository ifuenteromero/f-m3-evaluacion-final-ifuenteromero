import React ,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterCard = props => {
    const { id, name, image, house } = props.character;
    return (
        <Fragment>
        <div>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>{house}</p>
        </div>
        <Link to = {`character/${name}`}>más info</Link>
        </Fragment>
        
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