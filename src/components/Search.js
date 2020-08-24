import styled from '@emotion/styled/macro';
import QueryString from 'query-string';
import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {loadDataset} from '../api/data';
import SearchBar from './SearchBar';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Row = styled.div`
    display: flex;
    margin-top: 12px;
`;

const Search = () => {
    const [dataset, setDataset] = React.useState([]);
    const [query, setQuery] = React.useState('');
    const location = useLocation();
    const history = useHistory();
    const {q} = QueryString.parse(location.search);
    
    React.useEffect(() => {
        setQuery(q ?? '');
    }, [q]);
    
    React.useEffect(() => {
        loadDataset()
            .then(loadedDataset => setDataset(loadedDataset));
    }, []);
    
    const searchHandler = (value) => history.push(`${location.pathname}?${QueryString.stringify({q: value})}`);
    
    return (
        <Container>
            <SearchBar value={query} onSearch={searchHandler}/>
            {query &&
            dataset
                .filter(item => item.includes(query))
                .map(result => <Row key={result}>{result}</Row>)}
        </Container>
    );
};

export default Search;
