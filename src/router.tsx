import * as React from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom';

import App from './App';

class RouterContainer extends React.Component<undefined, undefined> {
    render(): any {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={App} />
                    <Route path='/*' component={() => <h1>WOOPS</h1>} />
                </Switch>
            </Router>
        );
    }
}

export default RouterContainer;
