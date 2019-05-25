import React from 'react';
import PropTypes from 'prop-types'

class CharacterDetail extends React.Component{
   
    
    render(){
        const {characters} = this.props;
        console.log(characters[0].name);
       
            const {name, id,image,house,dob,patronus,alive} = characters[2];
            const isAlive = alive ? 'vivo' :'muerto'
            return (
            <div data-id ={id}>
                <img src = {image} alt ={name} />
                <h1>{name}</h1>
                <p>{house}</p>
                <p>{dob}</p>
                <p>{patronus}</p>
                <p>{isAlive}</p>
      
             </div>)
        }
      
        
    

}
CharacterDetail.propTypes = {
    characters : PropTypes.arrayOf(PropTypes.object),
    id : PropTypes.number

}
export default CharacterDetail;


