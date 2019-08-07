import { combineReducers } from 'redux';
import _ from 'lodash';

import orders from './orders';

const paths = { orders };

const reducer = combineReducers(_.mapValues(paths, path => getReducer(path)));

export const defaultState = _.merge.apply(
    _,
    [{}].concat(_.mapValues(paths, path => _.get(path, 'reducers.defaultState')))
);

function getReducer(config) {
    const { defaultState, reducers } = config;
    const result = (state = defaultState, action) => {
        var reducer = reducers[action.type];
        if (reducer) {
            return reducer(state, action.payload);
        }
        return state;
    };
    return result;
}

export default reducer;
