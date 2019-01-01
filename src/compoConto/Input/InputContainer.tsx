import * as React from 'react';

interface IProps {
  onSubmit: (e: React.FormEvent, todoItem: string) => void;
}

interface IState {
  value: string;
}

export default class InputContainer extends React.Component<IProps, IState> {
  public state = {
    value: '',
  };

  public onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ value: e.currentTarget.value });
  };

  public render() {
    return (
      <form onSubmit={e => this.props.onSubmit(e, this.state.value)}>
        <input
          onChange={this.onChange}
          value={this.state.value}
          name="todoItem"
        />
      </form>
    );
  }
}
