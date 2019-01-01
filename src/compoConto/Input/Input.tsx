import * as React from 'react';
import styled from 'styled-components';

type IType = 'text' | 'password';

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: IType;
}

export const Input = ({ onChange, value, name, type }: IProps) => {
  return (
    <StyledInput name={name} value={value} onChange={onChange} type={type} />
  );
};

const StyledInput = styled.input`
  padding: 5px;
  width: 488px;
`;
