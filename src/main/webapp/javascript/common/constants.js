export const ACTION_CREATE_PERMISSION = 'ACTION_CREATE_PERMISSION';
export const ACTION_CREATE_PERMISSION_ERROR = 'ACTION_CREATE_PERMISSION_ERROR';
export const ACTION_GET_PERMISSIONS = 'ACTION_GET_PERMISSIONS';
export const ACTION_GET_PERMISSIONS_ERROR = 'ACTION_GET_PERMISSIONS_ERROR';
export const ACTION_SET_NAME = 'ACTION_SET_NAME';
export const ACTION_SET_PARENT = 'ACTION_SET_PARENT';
export const ACTION_TOGGLE_LOADING = 'ACTION_TOGGLE_LOADING';

export const API_PATH_PERMISSION = '/permission';

const ERROR = 'Something went wrong.';
export const ERROR_CREATE_PERMISSION = `${ERROR} Please try again!`;
export const ERROR_GET_PERMISSIONS = `${ERROR} Please refresh the page!`;
export const ERROR_NAME = message => `Name ${message}!`;

export const HEADER_CONTENT_TYPE = 'Content-Type';

export const ID_APP = 'app';

export const KEY_CREATE = 'create';
export const KEY_GET = 'get';
export const KEY_STORE = 'storeState';

export const LABEL_CREATE = 'Create';
export const LABEL_HIERARCHICAL_PERMISSIONS_MANAGEMENT = 'Hierarchical permissions management';
export const LABEL_NO_ROLES = 'No roles yet!'
export const LABEL_PARENT = 'Parent';
export const LABEL_ROLE = 'Role';
export const LABEL_ROLES = `${LABEL_ROLE}s`;

export const MEDIA_TYPE_JSON = 'application/json; charset=UTF-8';

export const REGEX_CAPITAL_LETTER = /[A-Z]/;

export const STATUS_CODE_OK = 200;
export const STATUS_CODE_NOK = 400;

export const TEXT_SIZE_18 = 18;