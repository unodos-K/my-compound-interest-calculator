import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
`


const ResultTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const ResultHeader = styled.th`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const ResultCell = styled.td`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

function CalculateResult({result} : any) {
    const formatNumberWithCommas = (number: number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <>
          <ResultContainer>
            {result !== null && (
                <ResultTable>
          <thead>
            <tr>
              <ResultHeader>항목</ResultHeader>
              <ResultHeader>금액</ResultHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <ResultCell>원금</ResultCell>
              <ResultCell>{formatNumberWithCommas(result.principal.toFixed(0))} 원</ResultCell>
            </tr>
            <tr>
              <ResultCell>예상 금액</ResultCell>
              <ResultCell>{formatNumberWithCommas(result.expectedAmount.toFixed(0))} 원</ResultCell>
            </tr>
            <tr>
              <ResultCell>예상금액 - 원금</ResultCell>
              <ResultCell>{formatNumberWithCommas(result.difference.toFixed(0))} 원</ResultCell>
            </tr>
          </tbody>
        </ResultTable>
            )} 
          </ResultContainer>
        </>
    );
}

export default CalculateResult