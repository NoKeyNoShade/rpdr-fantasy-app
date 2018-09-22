import * as React from 'react';

import { Header } from './components';
import types from './types';

export default class App extends React.Component<{}, {}> {
  render() {
      return (
        <main className='app__container'>
          <Header
            header='Drag Race Fantasy League'
            subHeader='Racers, start your engines.'
            type={types.HeaderType.primary}
          />
        </main>
    );
  }
}
