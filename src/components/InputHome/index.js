import React from 'react';

const InputHome = props => {
    const { value, dataHome  } = props;
    const { handleChangeHome,filterHome , name } = dataHome;
    return (
        <div>
            <input
                type="checkbox"
                value={value}
                id={value}
                name={name}
                onChange={handleChangeHome}
                checked = {filterHome.includes(value)}
            />
            <label htmlFor={value}>{value}</label>
        </div>
    );


}

export default InputHome;