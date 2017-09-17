import axios from 'axios';

//const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const ROOT_URL = `https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_BLOG}`
//const KEY = 'fjvfj62vbws';
const KEY = process.env.REACT_APP_KEY;
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_AUTHOR = 'FETCH_AUTHOR';
export const SEND_POST = 'SEND_POST';

export function fetchPosts() {
	const data = axios.get(`${ROOT_URL}/posts?key=${KEY}`);
	return {
		type: FETCH_POSTS,
		payload: data
	}
}

export function fetchAuthor() {
	const data = axios.get(`${ROOT_URL}?key=${KEY}`);
	return {
		type: FETCH_AUTHOR,
		payload: data
	}
}

export function sendPost(values) {
	//const data = axios.post(`${ROOT_URL}/posts?key=${KEY}`, values);
	return {
		type: SEND_POST,
		payload: values
	}
}