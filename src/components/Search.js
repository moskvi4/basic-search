import React from 'react';
import {loadDataset} from '../api/data';
import SearchBar from './SearchBar';

const Search = () => {
    React.useEffect(() => {
        loadDataset();
    }, []);
    
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

export default Search;
