import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const state = getState();
    const { posts } = state;

    _.chain(posts)
        .map('userId')
        .uniq()
        .forEach((id) => dispatch(fetchUser(id)))
        .value();
};

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    const { data } = response;

    dispatch({
        type: 'FETCH_POSTS',
        payload: data
    });
};

export const fetchUser = (id) => async(dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    const { data } = response;

    dispatch({
        type: 'FETCH_USER',
        payload: data
    });
};
