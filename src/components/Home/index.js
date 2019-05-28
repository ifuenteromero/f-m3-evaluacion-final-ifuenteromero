import React from 'react';

import Filter from '../Filter';
import CharacterList from '../CharacterList';

import './styles.scss';

const Home = props => {
    const { handleChange, filters, filteredCharacters } = props;
    const {filterName, filterDob } = filters;
    return (
        <div className="page--characters">
            <header>
                <h1 className="main__title">Harry Potter Characters</h1>
            </header>
            <main>
                <Filter
                    handleChange={handleChange}
                    data={
                       { value : filterName,
                        type : "text",
                        id : "filterName",
                        placeholder : "Search for a character"}
                    }
                />
                  <Filter
                    handleChange={handleChange}
                    data={
                       { value : filterDob,
                        type : "number",
                        id : "filterDob",
                        placeholder : "Search for a dob"}
                    }
                />
                <CharacterList
                    characters={filteredCharacters}
                />
            </main>
        </div>
    );
}

export default Home;