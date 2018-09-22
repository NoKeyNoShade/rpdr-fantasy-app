import * as React from 'react';
import * as classNames from 'classnames';

import { InputType, InputStyle } from './types';

interface Props {
  label?: string;
  className?: string;
  placeholder?: string;
  value: string;
  type?: InputType;
  style?: InputStyle;
}

interface State {}

export default class Input extends React.Component<Props, State> {
  render() {
    return (
      <div className={classNames('field', this.props.className)}>
        {this.props.label && <label>{this.props.label}</label>}
        <div className='control'>
          <input
            className={`input ${this.props.style}`}
            type={this.props.type}
            placeholder={this.props.placeholder}
          />
        </div>
      </div>
    );
  }
}
