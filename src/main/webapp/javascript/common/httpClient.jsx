import axios from 'axios';
import { API_URL } from './config';
import { HEADER_CONTENT_TYPE, MEDIA_TYPE_JSON } from './constants';

const get = async (path) => {
    try {
        return await axios.get(`${API_URL}${path}`);
    } catch (error) {
        console.log('Get request error: ', error);
    }
    return false;
};

const post = async (path, data) => {
    try {
        return await axios.post(`${API_URL}${path}`, JSON.stringify(data), {
            headers: { [HEADER_CONTENT_TYPE]: MEDIA_TYPE_JSON }
        });
    } catch (error) {
        console.log('Post request error: ', error);
    }
    return false;
}

export default { get, post };