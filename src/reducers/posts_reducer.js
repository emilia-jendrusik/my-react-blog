import {FETCH_POSTS} from '../actions';
import _ from 'lodash';
export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			console.log(action.payload);
			return action.payload.data.items;
		default:
			return state;
	}
}