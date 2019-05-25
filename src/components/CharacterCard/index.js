import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const CharacterCard = props => {
    const { name, image, house } = props.character;

    return (
        <div className="card-link__container">
            <div className="card__container">
                <div
                    className="card-image__container"
                    style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className="card-title__container">
                    <h1 className="card__title">{name}</h1>
                </div>
                <div className="card-house__container">
                    <i className="fas fa-dungeon"></i>
                    <p className="card-house">{house||'Homeless'}</p>
                </div>
            </div>
            <div className="link-container">
                <Link className="card__link" to={`character/${name}`}>More info</Link>
            </div>
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