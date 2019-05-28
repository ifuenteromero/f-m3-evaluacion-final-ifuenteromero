import React from 'react';

import Filter from '../Filter';
import CharacterList from '../CharacterList';
import FilterLife from '../FilterLife';

import './styles.scss';

const Home = props => {
    const { handleChange, filter, filteredCharacters,handleChangeLife,filterLife } = props;
    return (
        <div className="page--characters">
            <header>
                <h1 className="main__title">Harry Potter Characters</h1>
            </header>
            <main>
                <Filter
                    handleChange={handleChange}
                    value={filter}
                />
                <FilterLife 
                handleChangeLife = {handleChangeLife}
                filterLife = {filterLife}
                />
                <CharacterList
                    characters={filteredCharacters}
                />
            </main>
        </div>
    );
}

export default Home;