import React from 'react';
import CompoundInterestCalculator from '../components/CompoundInterestCalculator';
import styled from 'styled-components';

const Title = styled.h1`
    text-align: center;
`

function Home() {
    return (
        <div>
            <Title>복리계산기</Title>
            <CompoundInterestCalculator/>
        </div>
    );
}

export default Home;