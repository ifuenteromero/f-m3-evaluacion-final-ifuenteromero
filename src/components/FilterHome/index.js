import React from 'react';
import InputHome from '../InputHome';

const FilterHome = props => {
    const { handleChangeHome,filterHome } = props;
    const homeValues = ["Gryffindor","Slytherin","Ravenclaw","Hufflepuff","Homeless"];
  
    const dataHome = {
        handleChangeHome :  handleChangeHome ,
        filterHome : filterHome,
        name : 'home'
    }

    return (       
            homeValues.map((item,index)=>
            <InputHome key={index}  value = {item}
            dataHome = {dataHome} />
            )                  


    )
}



export default FilterHome;