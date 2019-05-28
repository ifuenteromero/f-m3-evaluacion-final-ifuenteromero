import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Filter = props => {
    const {handleChange, data } = props; 
    const { value,type,id ,placeholder } = data;
    return (
        <div className="filter__container">
            <label htmlFor="name"></label>
            <input 
                type = {type}
                id = {id}
                value = {value}
                name = {id}
                onChange = {handleChange}
                placeholder={placeholder}
                className = "filter__input"
                />
        </div>
    );
}

Filter.propTypes = {
    handleClick : PropTypes.func,
    value : PropTypes.string

}

export default Filter;