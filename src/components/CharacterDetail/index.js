import React from 'react';
import PropTypes from 'prop-types'

class CharacterDetail extends React.Component{
    constructor(props){
        super(props);

    }
    
    render(){
        const {characters} = this.props;
        if(characters[0]!==undefined){
            const {name, id,image,house,dob,patronus,alive} = characters[0];
            const isAlive = alive ? 'vivo' :'muerto'
            return (
            <div>
                <img src = {image} />
                <h1>{name}</h1>
                <p>{house}</p>
                <p>{dob}</p>
                <p>{patronus}</p>
                <p>{isAlive}</p>
      
             </div>)
        }
       else {
        return (         
            <div>
               <p>holi</p>
            </div>
          )
       }
        
    }

}
// CharacterDetail.propTypes = {
//     characters : PropTypes.arrayOf(PropTypes.object),
//     id : PropTypes.number

// }
export default CharacterDetail;


