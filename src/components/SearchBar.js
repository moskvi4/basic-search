import styled from '@emotion/styled/macro';
import React from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const Input = styled.input``;
const Button = styled.button``;

const SearchBar = ({onSearch, value}) => {
    const changeHandler = event => onSearch(event.target.value ?? '');
    const searchHandler = () => onSearch(value);
    
    return (
        <Container>
            <SearchContainer>
                <Input onChange={changeHandler} value={value}/>
                <Button onClick={searchHandler}>
                    Search
                </Button>
            </SearchContainer>
        </Container>
    );
};

export default SearchBar;
