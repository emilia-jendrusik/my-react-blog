import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const KEY = 'fjvfj62vbws'
export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
	const data = axios.get(`${ROOT_URL}?key=${KEY}`);
	return {
		type: FETCH_POSTS,
		payload: data
	}
}