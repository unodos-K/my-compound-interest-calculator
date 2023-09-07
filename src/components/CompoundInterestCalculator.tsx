import React, { useState } from 'react';
import styled from 'styled-components';
import CalculateResult from './CalculateResult';

const CalculatorForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: left;
`;

const Input = styled.input`
  width: 60%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
`;

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState<string | ''>('');
  const [interestRate, setInterestRate] = useState<string | ''>('');
  const [months, setMonths] = useState<string | ''>('');
  const [result, setResult] = useState<{
    principal: number;
    expectedAmount: number;
    difference: number;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const principalAmount = parseFloat(principal as string) * parseFloat(months as string);
    const interestRatePercentage = parseFloat(interestRate as string);
    
    const compoundInterest = principalAmount * Math.pow(1 + (interestRatePercentage / 100), Number(months));
    // 추가 요구사항에 따라 원금, 예상 금액, 예상금액 - 원금 계산
    const principalAmountWithInterest = compoundInterest - principalAmount;
    
    setResult({
      principal: principalAmount,
      expectedAmount: compoundInterest,
      difference: principalAmountWithInterest,
    });
  };

  return (
    <CalculatorForm onSubmit={handleSubmit}>
      <FormGroup>
        <Label>매달 저축액:</Label>
        <Input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          required
        />
        <p>원</p>
      </FormGroup>
      <FormGroup>
        <Label>연 이자율:</Label>
        <Input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          required
        />
        <p>%</p>

      </FormGroup>
      <FormGroup>
        <Label>납입 기간:</Label>
        <Input
          type="number"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          required
        />
        <p>년</p>
      </FormGroup>
      <CalculateResult result={result}/>
      <Button type="submit">계산하기</Button>

    </CalculatorForm>
  );
};

export default CompoundInterestCalculator;
