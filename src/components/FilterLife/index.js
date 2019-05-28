import React, { Fragment } from 'react';

const FilterLife = props => {
    const { handleChangeLife, filterLife } = props;
    return (
        <Fragment>
            <div>
                <input
                    type="checkbox"
                    id="alive"
                    value="alive"
                    name="life"
                    onChange={handleChangeLife}
                    checked={filterLife.includes('alive')}
                />
                <label htmlFor="alive">alive</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="dead"
                    value="dead"
                    name="life"
                    onChange={handleChangeLife}
                    checked={filterLife.includes('dead')}
                />
                <label htmlFor="dead">dead</label>
            </div>
        </Fragment>

    );

}


export default FilterLife;