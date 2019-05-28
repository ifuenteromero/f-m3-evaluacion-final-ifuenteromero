import React from 'react';

import Filter from '../Filter';
import CharacterList from '../CharacterList';

import './styles.scss';

const Home = props => {
    const { handleChange, filterName, filteredCharacters,filterActor } = props;
    return (
        <div className="page--characters">
            <header>
                <h1 className="main__title">Harry Potter Characters</h1>
            </header>
            <main>
                <Filter
                    handleChange={handleChange}
                    data = {{
                        value : filterName,
                        id : 'filterName',
                        placeholder : 'Search for a character'

                    }}
                   
                />
                 <Filter
                    handleChange={handleChange}
                    data = {{
                        value : filterActor,
                        id : 'filterActor',
                        placeholder : 'Search for an actor'

                    }}
                   
                />
                <CharacterList
                    characters={filteredCharacters}
                />
            </main>
        </div>
    );
}

export default Home;