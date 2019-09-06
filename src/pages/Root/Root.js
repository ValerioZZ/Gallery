import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';

import App from 'App';
import Routes from 'routes';


const Root = ({ store, history }) => (
    <Provider store={store}>
        <App>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </App>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.shape().isRequired,
    history: PropTypes.shape().isRequired,
}

export default Root;
