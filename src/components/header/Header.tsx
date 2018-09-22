import * as React from 'react';
import * as classNames from 'classnames';

import { HeaderType } from './types';

interface Props {
  header: string;
  subHeader: string;
  type?: HeaderType;
}

interface State {}

export default class Header extends React.PureComponent<Props, State> {
  render() {
    return (
      <section className={classNames('hero', this.props.type)}>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>{this.props.header}</h1>
            <h2 className='subtitle'>{this.props.subHeader}</h2>
          </div>
        </div>
      </section>
    );
  }
}
