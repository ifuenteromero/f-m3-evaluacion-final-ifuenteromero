import React, { Fragment } from 'react';


const FilterLife = props => {
    const { handleChangeLife,filterLife } = props;
    return (
        <Fragment>
            <div>
                <input
                    type="checkbox"
                    value="alive"
                    name="life"
                    id="alive"
                    onChange={handleChangeLife}
                    checked={ filterLife.includes('alive') }
                />
                <label htmlFor="alive">alive</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    value="dead"
                    name="life"
                    id="dead"
                    onChange={handleChangeLife}
                    checked={ filterLife.includes('dead') }
                />
                <label htmlFor="dead">dead</label>
            </div>

        </Fragment>

    );
}


export default FilterLife;