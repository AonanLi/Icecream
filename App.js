import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Setup from './Setup';
import rootReducer, { defaultState } from './src/reducers/root';

const store = createStore(rootReducer, defaultState);

const App = () => (
    <Provider store={store}>
        <Setup />
    </Provider>
);

export default App;
