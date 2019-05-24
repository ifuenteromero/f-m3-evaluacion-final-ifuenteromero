import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
    const {handleChange, value } = props; 
    return (
        <div>
            <label htmlFor="name"></label>
            <input 
                type = "text"
                id = "name"
                value = {value}
                name = "name"
                onChange = {handleChange}
                />
        </div>
    );
}

Filter.propTypes = {
    handleClick : PropTypes.func,
    value : PropTypes.string

}

export default Filter;