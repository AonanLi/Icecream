const defaultState = { loading: false };

const reducers = {
    LOAD_ACCOUNT: loadAccount
};

export default { reducers, defaultState };

function loadAccount(state, settings) {
    return { ...state, settings };
}
