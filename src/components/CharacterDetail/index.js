import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

import aliveIcon from '../../images/alive.ico';
import deadIcon from '../../images/dead.ico';

class CharacterDetail extends React.Component{
   
    componentDidMount(){
        console.log('El detail se ha montado');
    }
    render(){
        const { characters, match,handleReset } = this.props;
    const urlName = match.params.name;
    const characterIndex = characters.findIndex(character => character.name === urlName);
    if (characterIndex === -1) {
        return (<Fragment><p> Characters not found</p>
            <Link className="btn--back" to="/"> Back to homepage</Link></Fragment>)
    }
    else {
        const { name, id, image, house, dob, patronus, alive } = characters[characterIndex];
        const isAlive = alive ? 'alive' : 'dead';
        const lifeIcon = alive ? aliveIcon : deadIcon;
        return (
            < div className="page--detail">
                <div className="card-detail__container" id={id}>
                    <div className="detail-image__container"
                        style={{ backgroundImage: `url(${image})` }}>
                    </div>
                    <div className="detail-data__container">
                        <h1 className="detail-title">{name}</h1>
                        <div className="detail-house__container">
                            <i className="fas fa-dungeon detail-icon"></i>
                            <h2 className="detail-house">{house || 'Homeless'}</h2>
                        </div>

                        <p className="detail-data">{`Date of birth: ${dob}`}</p>
                        <p className="detail-data">{`Patronus: ${patronus || 'unknown'}`}</p>
                        <div className="detail-life__container">
                            <img className="icon--life" src={lifeIcon} alt={isAlive}></img>
                            <p className="detail__life detail-data">{isAlive}</p>

                        </div>
                        <div className="btn--back__container">
                            <Link 
                            to="/" 
                            className="btn--back"
                            onClick ={handleReset} >Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    }
}


CharacterDetail.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object),
}

export default CharacterDetail;


