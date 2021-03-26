import {
    ACTION_CREATE_PERMISSION,
    ACTION_CREATE_PERMISSION_ERROR,
    ACTION_GET_PERMISSIONS,
    ACTION_GET_PERMISSIONS_ERROR,
    ACTION_SET_NAME,
    ACTION_SET_PARENT,
    ACTION_TOGGLE_LOADING,
    ERROR_CREATE_PERMISSION,
    ERROR_GET_PERMISSIONS,
    ERROR_NAME,
    REGEX_CAPITAL_LETTER
} from '../../common/constants';

const initialState = {
    permissions: [],
    name: '',
    parent: undefined,
    loading: {
        get: false,
        create: false
    },
    error: {
        get: undefined,
        create: undefined
    }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TOGGLE_LOADING:
        const { key } = action;
        return { ...state, loading: { [key]: !state.loading[key] } };
    case ACTION_GET_PERMISSIONS:
        return { ...state, permissions: action.data, loading: initialState.loading, error: initialState.error };
    case ACTION_SET_NAME:
        return { ...state, name: action.name };
    case ACTION_GET_PERMISSIONS_ERROR:
        return { ...state, error: { get: ERROR_GET_PERMISSIONS }};
    case ACTION_CREATE_PERMISSION:
        return {
            ...state,
            permissions: [...state.permissions, action.body],
            name: '',
            parent: '',
            loading: initialState.loading,
            error: initialState.error
        };
    case ACTION_CREATE_PERMISSION_ERROR: {
        const error = action.body.toString();
        const message = REGEX_CAPITAL_LETTER.test(error[0]) ? error : ERROR_NAME(error);
        return { ...state, error: { create: error ? message : ERROR_CREATE_PERMISSION }};
    }
    case ACTION_SET_PARENT:
        return { ...state, parent: action.id };
    default:
        return state;
  }
};