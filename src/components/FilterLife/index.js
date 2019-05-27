import React,{Fragment} from 'react';

const FilterLife = props => {
const { handleChangeLife,filterLife } = props;
    return (
        <Fragment>
        <div>
            <input
                type="radio"
                value={true}
                id="alive"
                name="life"
                 checked = {filterLife===true}
                onChange = {handleChangeLife}
            />
            <label htmlFor="alive">alive</label>
        </div>
        <div>
            <input
                type="radio"
                value= {false}
                id="dead"
                name="life"
                 checked = {filterLife===false}
                onChange = {handleChangeLife}
            />
            <label htmlFor="dead">dead</label>
        </div>
        </Fragment>
    )

}



export default FilterLife;