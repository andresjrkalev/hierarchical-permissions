import {
    ACTION_CREATE_PERMISSION,
    ACTION_CREATE_PERMISSION_ERROR,
    ACTION_GET_PERMISSIONS,
    ACTION_GET_PERMISSIONS_ERROR,
    ACTION_SET_NAME,
    ACTION_SET_PARENT,
    ACTION_TOGGLE_LOADING,
    API_PATH_PERMISSION,
    KEY_CREATE,
    KEY_GET,
    STATUS_CODE_OK,
    STATUS_CODE_NOK
} from '../../common/constants';
import httpClient from '../../common/httpClient';

const toggleLoading = key => ({
    type: ACTION_TOGGLE_LOADING,
    key
});

export const getPermissions = dispatch => {
    dispatch(toggleLoading(KEY_GET));
    httpClient
        .get(API_PATH_PERMISSION)
        .then(data => response && dispatch({ type: ACTION_GET_PERMISSIONS, data: response.data }))
        .catch(() => dispatch({ type: ACTION_GET_PERMISSIONS_ERROR }));
    dispatch(toggleLoading(KEY_GET));
};

export const createPermission = async (name, parentId, dispatch) => {
    dispatch(toggleLoading(KEY_CREATE));
    const { data: { code, body }} = await httpClient.post(API_PATH_PERMISSION, { name, parentId });

    if (code === STATUS_CODE_OK) {
        dispatch({ type: ACTION_CREATE_PERMISSION, body });
    } else if (code === STATUS_CODE_NOK) {
        dispatch({ type: ACTION_CREATE_PERMISSION_ERROR, body });
    } else {
        dispatch({ type: ACTION_CREATE_PERMISSION_ERROR });
    }
    dispatch(toggleLoading(KEY_CREATE));
};

export const setName = name => ({
    type: ACTION_SET_NAME,
    name
});

export const setParent = id => ({
    type: ACTION_SET_PARENT,
    id
});