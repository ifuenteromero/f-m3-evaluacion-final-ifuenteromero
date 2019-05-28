import React from 'react';

import Filter from '../Filter';
import CharacterList from '../CharacterList';

import './styles.scss';

const Home = props => {
    const { handleChange, filterName, filteredCharacters,filterHairColor } = props;
    return (
        <div className="page--characters">
            <header>
                <h1 className="main__title">Harry Potter Characters</h1>
            </header>
            <main>
                <Filter
                    handleChange={handleChange}
                    data = {
                        {
                            value : filterName,
                            id : 'filterName',
                            placeholder : 'Search for a name'
                        }
                    }
                   
                />
                   <Filter
                    handleChange={handleChange}
                    data = {
                        {
                            value : filterHairColor,
                            id : 'filterHairColor',
                            placeholder : 'Search for hair color'
                        }
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