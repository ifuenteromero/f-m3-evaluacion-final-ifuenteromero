import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Filter = props => {
    const {handleChange, value } = props; 
    return (
        <div className="filter__container">
            <label htmlFor="name"></label>
            <input 
                type = "text"
                id = "name"
                value = {value}
                name = "name"
                onChange = {handleChange}
                placeholder="Look for a character"
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