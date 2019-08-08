import _ from 'lodash';

const defaultState = { ordered: {} };

const reducers = {
    EDIT_ORDER: editOrder
};

export default { reducers, defaultState };

function editOrder(state, { name, added }) {
    const before = _.get(state.ordered, name, 0);
    const after = before + (added ? 1 : -1);
    if (after === 0) {
        return { ...state, ordered: _.omit(state.ordered, name) };
    }
    return { ...state, ordered: { ...state.ordered, [name]: after } };
}
