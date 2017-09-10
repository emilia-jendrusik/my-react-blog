import axios from 'axios';

//const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const ROOT_URL = 'https://www.googleapis.com/blogger/v3/blogs/5499927683035314026/posts'
//const KEY = 'fjvfj62vbws';
const KEY = 'AIzaSyA-WGwExA5Ode12sY9dp_Ygh6Fqpw1yeZI';
export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
	const data = axios.get(`${ROOT_URL}?key=${KEY}`);
	return {
		type: FETCH_POSTS,
		payload: data
	}
}