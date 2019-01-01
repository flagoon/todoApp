import * as React from 'react';
import { Input } from './Input';
import { Form } from './Form';

interface IProps {
  onSubmit: (
    e: React.FormEvent,
    todoItem: string,
    resetInputValue: () => void
  ) => void;
}

interface IState {
  value: string;
}

export default class InputContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: '',
    };
  }

  public onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ value: e.currentTarget.value });
  };

  public resetInputValue = () => {
    this.setState({ value: '' });
  };

  public render() {
    return (
      <Form
        onSubmit={e =>
          this.props.onSubmit(e, this.state.value, this.resetInputValue)
        }
      >
        <Input
          onChange={this.onChange}
          value={this.state.value}
          name="todoItem"
          type="text"
        />
      </Form>
    );
  }
}
