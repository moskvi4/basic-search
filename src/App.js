import styled from '@emotion/styled/macro';
import React from 'react';
import Search from './components/Search';

const AppContainer = styled.div`
    padding-top: 12px;
`;

function App() {
    return (
        <AppContainer>
            <Search/>
        </AppContainer>
    );
}

export default App;
