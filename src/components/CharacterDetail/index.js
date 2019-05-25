import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


const CharacterDetail = props => {
    const { characters, match } = props;
    const urlName = match.params.name;
    const characterIndex = characters.findIndex(character => character.name === urlName);
    console.log(characterIndex);
    if (characterIndex===-1){return(<Fragment><p>no hay</p>
        <Link to ="/">Volver a la página principal</Link></Fragment>)}
    else{
    const { name, id, image, house, dob, patronus, alive } = characters[characterIndex];
    const isAlive = alive ? 'alive' : 'dead'
    return (
        <div id={id}>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>{house}</p>
            <p>{dob}</p>
            <p>{patronus}</p>
            <p>{isAlive}</p>
            <Link to="/">Volver</Link>

        </div>
    )
}

}

CharacterDetail.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object),
}

export default CharacterDetail;


