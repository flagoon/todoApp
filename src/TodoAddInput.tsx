import * as React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

interface ITodoAddInput {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  value: string;
}

const TodoAddInput = (props: ITodoAddInput) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Input
        type="text"
        value={props.value}
        name="value"
        onChange={props.onChange}
      />
    </Form>
  );
};

const Input = styled.input`
  margin-left: 1rem;
  padding: 0.5rem;
  font-size: 0.8rem;
  width: 450px;
  height: 2rem;
`;

const Form = styled.form`
  width: 500px;
`;

export default TodoAddInput;
