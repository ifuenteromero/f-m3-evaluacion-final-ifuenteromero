import React from 'react';

import Filter from '../Filter';
import CharacterList from '../CharacterList';
import FilterLife from '../FilterLife';
import FilterHome from '../FilterHome';

import './styles.scss';

const Home = props => {
    const { handleChange, filter, filteredCharacters,handleChangeLife,filterLife,handleChangeHome,filterHome } = props;
    const results = filteredCharacters.length;
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
                <FilterLife handleChangeLife={handleChangeLife} filterLife={filterLife}/>
                <p>{results}</p>
                <FilterHome 
                handleChangeHome={handleChangeHome}
                filterHome = {filterHome}
                />
                <CharacterList
                    characters={filteredCharacters}
                />
            </main>
        </div>
    );
}

export default Home;